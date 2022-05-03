import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-job-form',
  templateUrl: './post-job-form.component.html',
  styleUrls: ['./post-job-form.component.css']
})
export class PostJobFormComponent implements OnInit {
  form!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.form =this.formBuilder.group({
      title:'',
      requirements:'',
      location:'',
      jobtype:'',
      
    })
  }
submit():void{
  console.log(this.form.getRawValue());
  this.http.post('http://127.0.0.1:8000/api/Job/',this.form.getRawValue())
  subscribe(() => this.router.navigate(['recruiter-dashboard']));
}
}
function subscribe(arg0: () => Promise<boolean>) {
  throw new Error('Function not implemented.');
}
