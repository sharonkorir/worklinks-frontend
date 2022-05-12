import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css']
})
export class EmployerSignupComponent implements OnInit {
  form !: FormGroup;
  

  mpesaForm = this.fb.group({
    amount: ["10,000" ,Validators.required],
    contact : ["",Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      email: '',
      password: ''
    });
  }
  submit(): void {
    this.http.post('https://moiwork.herokuapp.com/register', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/employer/login']));
  }
  lipaNaMpesa(){
    console.log(this.mpesaForm.value);
    this.http.post('', this.form.getRawValue())
      .subscribe(res => this.router.navigate(['/employer/register']));
  }
}