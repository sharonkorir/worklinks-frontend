import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchTerm = '';

  constructor(
    private searchService: SearchService

  ) { }

  ngOnInit(): void {
  }

  searchJobseekers(): void {
    console.log('search term', this.searchTerm)
    if (this.searchTerm === '') return;
    this.searchService.getResults(this.searchTerm)
    .subscribe(
      (response: any) =>{
        console.log ('Data - ', response);
      },
      (error: any) => {
        console.log('error occured', error);
      }
    );
  }

}
