import { Component } from '@angular/core';


import { UsersService } from './users.service';
import { ToDoListService } from './to-do-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthDay : Date = new Date();
  title : string = '';

 


  users : Array<any> = [
    {firstName: 'Ivan', lastName: 'Ivanov'},
    {firstName: 'Petr', lastName: 'Petrov'},
    {firstName: 'Vasya', lastName: 'Hmuriy'},
  ];

  onButtonClicked(){
    this.title = "Button clicked !";
  }
}
