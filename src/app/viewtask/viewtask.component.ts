import { Component, OnInit } from '@angular/core';
import { Taskdet } from 'src/app/taskdet';
import { PmserviceService } from 'src/app/pmservice.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css'],
  providers: [DatePipe]
})
export class ViewtaskComponent implements OnInit {
  taskdets: any[] = [];  
  currentDate = new Date();
  today = '';
  constructor(private pmService: PmserviceService, private router: Router, private datepipe: DatePipe) {
    this.pmService.getallTasks().subscribe(taskdets => {
      this.taskdets = taskdets;     
      console.log(this.taskdets);      
    });
    this.today = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd');    
  }

  ngOnInit() {
  }
  isOld(date){
    
    if(date > this.today){
      return false;
    }else{
      return true;
    }
  }

   getallTasks() {
    this.pmService.getallTasks().subscribe(taskdets => {
      this.taskdets = taskdets;            
    });    
  }
  updTask(tsk) {
    this.pmService.updTaskData(tsk);
    this.router.navigateByUrl('/tasks');
    

  }
  delTask(tsk) {
    console.log(tsk.tid);
    this.pmService.updTaskStatus(tsk).subscribe(msg => console.log(msg));

  }

}
