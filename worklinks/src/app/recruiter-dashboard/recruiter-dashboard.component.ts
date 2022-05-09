import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import * as Emitter from 'component-emitter';
import TypedEmitter from "typed-emitter";
import { SearchFilterPipe } from '../search-filter.pipe';


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
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {
 public searchFilter: any = '';
 deleteId!: number;
 jobs!: Job[];
 
    
  constructor(
    private http:HttpClient
  ) { }



  ngOnInit(): void {
 this.getJobs();

  }
  
  getJobs(){
    this.http.get<any>('http://worklinks.herokuapp.com/api/Job/').subscribe(
      response => {
        console.log(response);
        this.jobs = response;
      }
    );
  }
  updateJobs(jobs: any,id:number){
    this.http.put<any>('http://worklinks.herokuapp.com/api/Job/',id,jobs).subscribe(
      response => {
        console.log(response);
        jobs = response;
      }
    );
  }
}