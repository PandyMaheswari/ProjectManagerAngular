import { Component, OnInit } from '@angular/core';
import { Projectio } from 'src/app/projectio';
import { PmserviceService } from 'src/app/pmservice.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [DatePipe]
})
export class ProjectComponent implements OnInit {
  sucessmsg = '';
  actbtn = 'Add';
  pj: Projectio = new Projectio();
  projects: Projectio[] = [];
  dtchk = false;
  date: Date;
  stdt = '';
  eddt = '';
  constructor(private pmService: PmserviceService, private datepipe: DatePipe) {
    this.pmService.getallProjects().subscribe(projectsop => {
      this.projects = projectsop;
    });
  }

  ngOnInit() {
  }

  getallProjects() {
    this.pmService.getallProjects().subscribe(projectsop => {
      this.projects = projectsop;

    });
  }
  addProject() {
    console.log(this.pj.sdate);
    if(this.dtchk === true){      
      this.date = new Date();
      this.stdt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
      this.date.setDate(this.date.getDate() + 1);
      this.eddt = this.datepipe.transform(this.date, 'yyyy-MM-dd');
      this.pj.sdate = this.stdt;
      this.pj.edate = this.eddt;     
    }
    
    this.pmService.addProject(this.pj)
      .subscribe(msg => {
        console.log(msg);
        this.sucessmsg = 'Project ' + msg.project + ' got inserted successfully ';
      });
    this.getallProjects();
  }
  updProject(pjs) {
    this.actbtn = 'Update';
    this.pj = pjs;
  }
  susProject(pjs) {
    console.log(pjs);

  }
  pjreset() {
    this.pj = new Projectio();
    this.actbtn = 'Add';
    this.sucessmsg = '';
  }
}
