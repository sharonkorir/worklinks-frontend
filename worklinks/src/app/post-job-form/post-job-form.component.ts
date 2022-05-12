import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-job-form',
  templateUrl: './post-job-form.component.html',
  styleUrls: ['./post-job-form.component.css']
})
export class PostJobFormComponent implements OnInit {
  formValue: any;


  constructor(
    private http:HttpClient,
    private router:Router
   
  ) { }
  onSubmit(data: any){
    this.http.post('http://worklinks.herokuapp.com/api/Job/',data)
    .subscribe((results) =>{
      console.warn('results',results)
      alert("Job Posted Successfully")
      this.router.navigate(['/recruiter-dashboard'])

      this.formValue.reset();
    })
    console.log(data);
    
     }
  ngOnInit(): void {
  
  }
}