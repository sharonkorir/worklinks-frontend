import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchResults = new Subject();

  constructor(
    private http: HttpClient
  ) { }
    /*paste database API in get ('') */
  getResults(searchTerm:string): Observable<any> {
    return this.http
      .get('')
  }

  passResults(results: any): void {
    this.searchResults.next(results)
  }

  getPassedResults(): Observable<any>{
    return this.searchResults.asObservable();
  }
}
