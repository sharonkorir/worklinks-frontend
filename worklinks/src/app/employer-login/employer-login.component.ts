import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {

 

  loginForm = this.fb.group({
    email: ["" ,Validators.required],
    // username : ["" ,Validators.required],
    // phone : ["" ,Validators.required],
    password1 : ["" ,Validators.required],
  
  })

  get email(){return this.loginForm.get('email')}
  get password1(){return this.loginForm.get('password1')}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.loginForm.value);
  }
}
