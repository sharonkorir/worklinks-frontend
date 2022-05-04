import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Emitter from 'component-emitter';
import TypedEmitter from "typed-emitter";

@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {

  Job:any;  
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>('http://127.0.0.1:8000/api/Job/').subscribe(
      (      res: any) =>{
        console.log(res);
        this.Job =res;
      }
    );
  }

}
