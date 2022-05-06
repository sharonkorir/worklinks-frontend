import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import * as Emitter from 'component-emitter';
import TypedEmitter from "typed-emitter";
import { SearchFilterPipe } from '../search-filter.pipe';


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
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {
 public searchFilter: any = '';
 deleteId!: number;
 jobs!: Job[];
  dialog: any;
  status!: string;
    
  constructor(
    private http:HttpClient
  ) { }



  ngOnInit(): void {
 this.getJobs();
 this.deletejobs();
  }
  deletejobs(){
    this.http.delete('http://127.0.0.1:8000/api/Job/')
            .subscribe(() => this.status = 'Delete successful')
  }
  
  getJobs(){
    this.http.get<any>('http://worklinks.herokuapp.com/api/Job/').subscribe(
      response => {
        console.log(response);
        this.jobs = response;
      }
    );
  }
  onDelete() {
    const deleteURL = 'http://127.0.0.1:8000/api/Job/' + this.deleteId + '/delete';
    this.http.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.dialog.closeAll();
      });
  }
  openDelete(templateRef:TemplateRef<any>, job: any) {
    this.deleteId = job.id;
    this.dialog.open(templateRef, {
      with:'40%',
      height:'70%'
    });
  }

}
