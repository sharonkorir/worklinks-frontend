import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from '../emmiters/emmiters';



@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  form!:FormGroup;
  message = '';
  data: any;
  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
  ) { }
  
  
  onSubmit(data: any){
    this.http.post('https://moiwork.herokuapp.com/api/UpdateUserProfile/',data)
    .subscribe((results) =>{
      console.warn('results',results)
      alert("Profile updated Successfully")
      this.router.navigate(['/job/application'])
   
      this.data.reset();
    })
    console.log(data);
    
     }

  ngOnInit(): void {
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