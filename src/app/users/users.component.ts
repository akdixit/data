import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  constructor(http:HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/users')
     .subscribe(Response =>){
       this.users=Response.json
     }
     }
   }

  ngOnInit(): void {
  }

}
