import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Emitters } from '../emmiters/emmiters';

@Component({
  selector: 'app-recruiter-navbar',
  templateUrl: './recruiter-navbar.component.html',
  styleUrls: ['./recruiter-navbar.component.css']
})
export class RecruiterNavbarComponent implements OnInit {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.http.post('https://moiwork.herokuapp.com/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }

}