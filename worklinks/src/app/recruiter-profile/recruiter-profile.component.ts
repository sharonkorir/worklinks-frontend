import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emmiters/emmiters';



@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.css']
})
export class RecruiterProfileComponent implements OnInit {
  form!:FormGroup;
  message = '';

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
    this.http.get('https://moiwork.herokuapp.com/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.name}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
    
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

