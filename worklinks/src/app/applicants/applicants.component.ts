import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';

export class apply{
  constructor(
    public Full_Name: string,
    public Email: string,
    public Contact: number,
    public Salary_Expectations: string,
   
  ) {
  }
}
@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  apply!: apply[];
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.applyJobs();
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
