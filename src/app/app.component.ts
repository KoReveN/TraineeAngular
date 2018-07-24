import { Component } from '@angular/core';

import { UserTableComponent } from './user-table/user-table.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './users.service';
import { ToDoListService } from './to-do-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[ToDoListService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthDay : Date = new Date();
  title : string = '';

  public newTask = "";
  // public toDoList : Array<string> ;


constructor(public toDoListService : ToDoListService) {
  toDoListService.loadTasks();
 }


  public addTask(){
    if (this.newTask != ''){
    this.toDoListService.addTask(this.newTask)
  // this.toDoList.push();
  this.newTask = '';
} else {
  alert('Перед добавлением новой задачи - укажите её');
}
}


  users : Array<any> = [
    {firstName: 'Ivan', lastName: 'Ivanov'},
    {firstName: 'Petr', lastName: 'Petrov'},
    {firstName: 'Vasya', lastName: 'Hmuriy'},
  ];

  onButtonClicked(){
    this.title = "Button clicked !";
  }
}
