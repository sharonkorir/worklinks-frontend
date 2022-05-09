import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  data: any;
  constructor(private http:HttpClient) { }
  onSubmit(data: any){
    this.http.post('https://moiwork.herokuapp.com/api/UpdateUserProfile/',data)
    .subscribe((results) =>{
      console.warn('results',results)
      alert("Profile updated Successfully")

      this.data.reset();
    })
    console.log(data);
    
     }
  ngOnInit(): void {
  }

}
