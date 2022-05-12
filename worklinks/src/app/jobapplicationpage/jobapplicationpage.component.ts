import { SearchFilterPipe } from './../search-filter.pipe';
import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class Job{
  constructor(
    public id: number,
    public title: string,
    public requirements: string,
    public location: string,
    public jobtype: string,
   
  ) {
  }
}

@Component({
  selector: 'app-jobapplicationpage',
  templateUrl: './jobapplicationpage.component.html',
  styleUrls: ['./jobapplicationpage.component.css']
})
export class JobapplicationpageComponent implements OnInit {
  jobs!:Job[];
  formValue: any;
  public searchList: any;

  constructor(private http:HttpClient, private router:Router) { }
  
  onSubmit(data: any){
    this.http.post('https://moiwork.herokuapp.com/api/Apply/',data)
    .subscribe((results) =>{
      console.warn('results',results)
      alert("Job applied Successfully")
      this.router.navigate(['/job/application'])

      
    })
    console.log(data);
    
     }
  ngOnInit(): void {
    this.getJobs();
  }
  getJobs(){
    this.http.get<any>("https://worklinks.herokuapp.com/api/Job/").subscribe(
      Response =>{
        console.log(Response);
        this.jobs=Response
      }
    )
  }

}
