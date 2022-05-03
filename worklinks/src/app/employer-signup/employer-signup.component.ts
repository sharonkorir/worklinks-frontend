import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css']
})
export class EmployerSignupComponent implements OnInit {

  // email = new FormControl('');
  // username = new FormControl('');
  // companyName = new FormControl('');
  // phone = new FormControl('');
  // password1 = new FormControl('');
  // password2 = new FormControl('');

  registerForm = this.fb.group({
    email: ["" ,Validators.required],
    username : ["",Validators.required],
    companyName : ["",Validators.required],
    phone : ["",Validators.required],
    password1 : ["",Validators.required],
    password2 : ["",Validators.required],
  })

  mpesaForm = this.fb.group({
    phone : ["",Validators.required],
    amount : ["",Validators.required],
    paymentMethod : ["",Validators.required],
  })

  get email(){return this.registerForm.get('email')}
  get password1(){return this.registerForm.get('password1')}
  get password2(){return this.registerForm.get('password2')}
  get username(){return this.registerForm.get('username')}
  get phone(){return this.registerForm.get('phone')}
  get companyName(){return this.registerForm.get('companyName')}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.registerForm.value);
    console.log(this.mpesaForm.value);
  }
}
