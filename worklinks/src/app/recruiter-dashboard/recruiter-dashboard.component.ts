import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import * as Emitter from 'component-emitter';
import TypedEmitter from "typed-emitter";
import { apply } from '../applicants/applicants.component';


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
 public searchList: any = '';
 jobs!: Job[];
 apply!: apply[];
    
  constructor(
    private http:HttpClient
  ) { }



  ngOnInit(): void {
 this.getJobs();

  }
  
  getJobs(){
    this.http.get<any>('https://worklinks.herokuapp.com/api/Job/').subscribe(
      response => {
        console.log(response);
        this.jobs = response;
      }
    );
  }
  
  applyJobs(){
    this.http.get<any>('https://moiwork.herokuapp.com/api/Apply/').subscribe(
      response => {
        console.log(response);
        this.apply = response;
      }
    );
  }
}
