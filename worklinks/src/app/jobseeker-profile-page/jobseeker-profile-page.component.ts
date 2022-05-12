import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Profile{
  constructor(
    public id: number,
    public full_name:string,
    public address: string,
    public email: string,
    public location: string,
    public jobtype: string,
    public profile_image:File,
    public resume:any,
    public bio:string,
    public work_experience:string,
    public skills:string,
    public referees:string,

   
  ) {
  }
}
@Component({
  selector: 'app-jobseeker-profile-page',
  templateUrl: './jobseeker-profile-page.component.html',
  styleUrls: ['./jobseeker-profile-page.component.css']
})
export class JobseekerProfilePageComponent implements OnInit {
profile!:Profile[];

  constructor( 
    private http:HttpClient) { }

  ngOnInit(): void {
    this.getprofile();
  }

  getprofile(){
    this.http.get<any>('https://moiwork.herokuapp.com/api/UpdateUserProfile/').subscribe(
      response => {
        console.log(response);
        this.profile = response;
      }
    );
  }
  filteredImages(value: any) {
    const imageString = value.replace('https://moiwork.herokuapp.com/media/', 'https://moiwork.herokuapp.com/media/')
    return imageString
  }
}
