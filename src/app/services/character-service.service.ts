import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { handleError } from './utils';
import { BASE_URL, TS, API_KEY, MD5_HASH } from '../../environments/environment';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

    // get characters
    getCharacters(  offset: number , limit: number): Observable<Character[]> {
      const paginatedURL = this.getPaginatedURL( offset, limit );     
      
      return this.http.get<Character[]>(paginatedURL)
        .pipe(
          tap(characters => console.log('fetched all characters')),
          catchError(handleError('getCharacters',[]))
        );
    }
    
    getPaginatedURL(offset: number , limit: number): string {
      if( !limit ) {
        limit = 20;
      }

      if( !offset ) {
        offset = 0;
      }

      return `${BASE_URL}/characters?limit=${limit}&offset=${offset}&ts=${TS}&apikey=${API_KEY}&hash=${MD5_HASH}` ;
    }
}
