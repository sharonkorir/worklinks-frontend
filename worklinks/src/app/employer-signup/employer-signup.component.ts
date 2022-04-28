import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css']
})
export class EmployerSignupComponent implements OnInit {

  email = new FormControl('');
  name = new FormControl('');
  phone = new FormControl('');
  password1 = new FormControl('');
  password2 = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
