import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-jobseeker',
  templateUrl: './register-jobseeker.component.html',
  styleUrls: ['./register-jobseeker.component.css']
})
export class RegisterJobseekerComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post('https://moiwork.herokuapp.com/register', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/jobseeker/login']));
  }
}
