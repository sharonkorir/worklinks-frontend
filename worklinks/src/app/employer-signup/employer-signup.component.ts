import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css']
})
export class EmployerSignupComponent implements OnInit {

  email = new FormControl('');
  username = new FormControl('');
  companyName = new FormControl('');
  phone = new FormControl('');
  password1 = new FormControl('');
  password2 = new FormControl('');

  registerForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email : new FormControl(''),
      username : new FormControl(''),
      companynName : new FormControl(''),
      phone : new FormControl(''),
      password1 : new FormControl(''),
      password2 : new FormControl(''),
    })
  }

}
