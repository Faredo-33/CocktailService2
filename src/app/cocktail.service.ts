import{HttpClient }from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktail } from './models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  
  constructor(public http: HttpClient) { }
  
  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<object>("assets/cocktails.json").pipe(
      map(
        (obj: object) => {
          const entries: string[] = Object.keys(obj);
          let response: Cocktail[] = [];
          for (let i = 0; i < entries.length; i++) {
            response.push(<Cocktail>obj[entries[i] as keyof object]);
          }
          return response;
        }));
        
      }
    }
