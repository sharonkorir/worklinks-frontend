import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-employer-login',
  templateUrl: './employer-login.component.html',
  styleUrls: ['./employer-login.component.css']
})
export class EmployerLoginComponent implements OnInit {

  email = new FormControl('');
  name = new FormControl('');
  phone = new FormControl('');
  password1 = new FormControl('');
  password2 = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
