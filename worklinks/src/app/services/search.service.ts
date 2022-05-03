import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }
    /*paste database API in get ('') */
  getResults(searchTerm:string): Observable<any> {
    return this.http
      .get('')
  }
}
