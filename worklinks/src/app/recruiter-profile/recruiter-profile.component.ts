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
  data: any;
  form!:FormGroup;
  message = '';

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
  ) { }

 
onSubmit(data: any){
  this.http.post('https://moiwork.herokuapp.com/api/EmployerProfile/',data, {withCredentials: true})
  .subscribe((results) =>{
    console.warn('results',results)
    alert("Profile updated Successfully")
    this.router.navigate(['/recruiter-dashboard'])
 
    this.data.reset();
  })
  console.log(data);
  
   }

  ngOnInit(): void {

<<<<<<< HEAD
=======
    this.form =this.formBuilder.group({
      name:'',
      company_pic:'',
      location:'',
      address:'',
      email:'',
      contacts:'',
      company_bio:''
    })
>>>>>>> 6ec6c70ac800e90994e820a06de75ada738872a3
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

}



