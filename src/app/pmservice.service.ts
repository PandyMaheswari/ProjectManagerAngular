import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';


import { map } from 'rxjs/operators';
import { Usersio } from 'src/app/usersio';
import { Projectio } from 'src/app/projectio';
import { Taskinput } from 'src/app/taskinput';
import { Observable } from 'rxjs';
import { Taskdet } from 'src/app/taskdet';
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PmserviceService {
  ti: Taskinput = new Taskinput();
  constructor(private http: HttpClient) { }

  public getallUsers() {
    return this.http.get<any[]>(API_URL + '/users').pipe(map(data => data));
  }
  public addUser(usr) {
    return this.http.post<Usersio>(API_URL + '/addUser', usr).pipe(map(response => response));
  }
  public getallProjects() {
    return this.http.get<any[]>(API_URL + '/projects').pipe(map(data => data));
  }
  public addProject(project) {
    return this.http.post<any>(API_URL + '/addProject', project).pipe(map(response => response));
  }
   getallTasks(): Observable<Taskdet[]> {
    return this.http.get<Taskdet[]>(API_URL + '/tasks');
  }
  public addTask(task) {
    return this.http.post<any>(API_URL + '/tsk', task).pipe(map(response => response));
  }
  public addParentTask(ptask) {
    return this.http.post<any>(API_URL + '/ptsk', ptask).pipe(map(response => response));
  }
  public updTaskStatus(task) {
    console.log(task.tid);
    return this.http.post<any>(API_URL + '/tsksts', task).pipe(map(response => response));
  }
  public updTaskData(tsk) {
    this.ti = new Taskinput();
    this.ti.taskid = tsk.tid;
    this.ti.project = tsk.project;
    this.ti.task = tsk.task;
    this.ti.priority = tsk.priority;
    this.ti.sdate = tsk.sdate;
    this.ti.edate = tsk.edate;
    this.ti.parenttask = tsk.ptask;
    this.ti.empid = tsk.empid;

  }
  public getTaskData() {
    return this.ti;
  }

}
