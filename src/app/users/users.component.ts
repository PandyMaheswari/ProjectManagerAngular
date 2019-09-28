import { Component, OnInit } from '@angular/core';
import { PmserviceService } from 'src/app/pmservice.service';
import { Usersio } from 'src/app/usersio';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  sucessmsg = '';
  actbtn = 'Add';
  usr: Usersio = new Usersio();
  users: Usersio[] = [];
  constructor(private pmService: PmserviceService) {
    this.pmService.getallUsers().subscribe(usersop => {
      this.users = usersop;
      console.log(this.users);
    });
  }

  ngOnInit() {
  }
  getallUsers() {
    this.pmService.getallUsers().subscribe(usersop => {
      this.users = usersop;
    });
  }
  addUser() {
    this.pmService.addUser(this.usr)
      .subscribe(msg => {
        console.log(msg);
        this.sucessmsg = 'User ' + msg.fname + ' got inserted successfully ';
      });
      this.getallUsers();
  }
  updUser(usrs) {
    this.actbtn = 'Update';
    this.usr=usrs;
    //this.updet = tsk;
  }
  
  usrreset() {
    this.usr = new Usersio();
    this.actbtn = 'Add';
    this.sucessmsg = '';
  }

}
