import { SearchFilterPipe } from './../search-filter.pipe';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Job{
  constructor(
    public id: number,
    public title: string,
    public requirements: string,
    public location: string,
    public jobtype: string,
   
  ) {
  }
}

@Component({
  selector: 'app-jobapplicationpage',
  templateUrl: './jobapplicationpage.component.html',
  styleUrls: ['./jobapplicationpage.component.css']
})
export class JobapplicationpageComponent implements OnInit {
  jobs!:Job[];
  public searchList: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getJobs();
  }
  getJobs(){
    this.http.get<any>("https://worklinks.herokuapp.com/api/Job/").subscribe(
      Response =>{
        console.log(Response);
        this.jobs=Response
      }
    )
  }

}
