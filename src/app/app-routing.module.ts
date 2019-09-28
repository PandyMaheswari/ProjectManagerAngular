import { NgModule } from '@angular/core';
import { UsersComponent } from 'src/app/users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from 'src/app/project/project.component';
import { AddtaskComponent } from 'src/app/addtask/addtask.component';
import { ViewtaskComponent } from 'src/app/viewtask/viewtask.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'tasks', component: AddtaskComponent},
  {path: 'viewtasks', component: ViewtaskComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
