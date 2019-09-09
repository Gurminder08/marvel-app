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

  URL:string = `${BASE_URL}/characters?limit=100&ts=${TS}&apikey=${API_KEY}&hash=${MD5_HASH}` 

  constructor(private http: HttpClient) { }

    // get characters
    getCharacters(): Observable<Character[]> {
      return this.http.get<Character[]>(this.URL)
        .pipe(
          tap(characters => console.log('fetched all characters')),
          catchError(handleError('getCharacters',[]))
        );
    }    
}
