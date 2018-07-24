import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  providers:[ToDoListService],
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public newTask = "";
  // public toDoList : Array<string> ;



  constructor(public toDoListService: ToDoListService) {
    toDoListService.loadTasks();
   }

   public addTask() {
    if (this.newTask != '') {
      this.toDoListService.addTask(this.newTask)
      // this.toDoList.push();
      this.newTask = '';
    } else {
      alert('Перед добавлением новой задачи - укажите её');
    }
  }



  ngOnInit() {
  }

}
