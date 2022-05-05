import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})
export class RecruiterProfileComponent implements OnInit {
  form!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.form =this.formBuilder.group({
      name:'',
      company_pic:'',
      location:'',
      address:'',
      email:'',
      contacts:'',
      company_bio:''
    })
  }
submit():void{
  console.log(this.form.getRawValue());
  this.http.post('',this.form.getRawValue())
  subscribe(() => this.router.navigate(['recruiter-dashboard']));
}
}
function subscribe(arg0: () => Promise<boolean>) {
  throw new Error('Function not implemented.');
}

