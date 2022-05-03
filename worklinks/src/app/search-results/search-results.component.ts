import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchTerm = '';
  results: any[] = [];
  count = 0;

  constructor(
    private searchService: SearchService

  ) { }

  ngOnInit(): void {
    this.searchService.getPassedResults()
      .subscribe(
        (response:any) => {
          this.results = response.results;
          this.count = response.count;
          console.log('Results', this.results, this.count)
        },
        (error:any) =>{
          console.log('Error occured', error)
        }
      )
  }

  searchJobseekers(): void {
    console.log('search term', this.searchTerm)
    if (this.searchTerm === '') return;
    this.searchService.getResults(this.searchTerm)
    .subscribe(
      (response: any) =>{
        // console.log ('Data - ', response);
        this.searchService.passResults({results:response.value, count:response.totalCount})
      },
      (error: any) => {
        console.log('error occured', error);
      }
    );
  }

}
