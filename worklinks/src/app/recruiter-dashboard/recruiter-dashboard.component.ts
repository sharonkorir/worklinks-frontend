import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import * as Emitter from 'component-emitter';
<<<<<<< HEAD
import TypedEmitter from "typed-emitter";
import { apply } from '../applicants/applicants.component';
=======
// import TypedEmitter from "typed-emitter";
>>>>>>> 6ec6c70ac800e90994e820a06de75ada738872a3


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
<<<<<<< HEAD
=======

>>>>>>> 6ec6c70ac800e90994e820a06de75ada738872a3
 jobs!: Job[];
 apply!: apply[];
    
  constructor(
    private http:HttpClient
  ) { }



  ngOnInit(): void {
 this.getJobs();

  }
  
  getJobs(){
<<<<<<< HEAD
    this.http.get<any>('https://worklinks.herokuapp.com/api/Job/').subscribe(
=======
    this.http.get<any>('http://worklinks.herokuapp.com/api/Job/').subscribe(
>>>>>>> 6ec6c70ac800e90994e820a06de75ada738872a3
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
