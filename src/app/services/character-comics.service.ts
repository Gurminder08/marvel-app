import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { handleError } from './utils';
import { BASE_URL, TS, API_KEY, MD5_HASH } from '../../environments/environment';
import { CharacterComics } from '../models/character-comics';

@Injectable({
  providedIn: 'root'
})
export class CharacterComicsService {

  id: number;

  constructor(private http: HttpClient) { }

    // get characters
    getCharacterComics(  offset: number , limit: number, id: number): Observable<CharacterComics[]> {
      this.id = id;
      const paginatedURL = this.getPaginatedURL( offset, limit );     
      return this.http.get<CharacterComics[]>(paginatedURL)
        .pipe(
          tap(comics => console.log('fetched all character comics')),
          catchError(handleError('getComics',[]))
        );
    }
    
    getPaginatedURL(offset: number , limit: number): string {
      if( !limit ) {
        limit = 20;
      }

      if( !offset ) {
        offset = 0;
      }

      return `${BASE_URL}/characters/${this.id}/comics?limit=${limit}&offset=${offset}&ts=${TS}&apikey=${API_KEY}&hash=${MD5_HASH}` ;
    }
}
