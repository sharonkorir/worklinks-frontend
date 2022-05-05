import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


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
    amount: ["10,000" ,Validators.required],
    contact : ["",Validators.required],
  })

  get email(){return this.registerForm.get('email')}
  get password1(){return this.registerForm.get('password1')}
  get password2(){return this.registerForm.get('password2')}
  get username(){return this.registerForm.get('username')}
  get phone(){return this.registerForm.get('phone')}
  get companyName(){return this.registerForm.get('companyName')}

  get contact(){return this.mpesaForm.get('contact')}
  

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.registerForm.getRawValue());
    /* add api endpoint to post ('') */
    
    
  }
  lipaNaMpesa(){
    console.log(this.mpesaForm.value);
    this.http.post('', this.registerForm.getRawValue())
      .subscribe(res => this.router.navigate(['/employer/register']));
  }
}
