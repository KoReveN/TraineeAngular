import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  public toDoList: Array<any> = [
   { task: "Задача 1", isComplated: false},
   { task: "Задача 2", isComplated: false}
  ];
  private storageKey = "toDoList1";

  constructor() { }


  public addTask(newTask: string) {
    if (this.toDoList != null) {
      if (newTask != null) {
        // alert('toDoList.Count = ' + this.toDoList.length);
        this.toDoList.push({ task: newTask, isComplated: false});
        this.saveTasks();
      } else { alert('Ошибка, новая задача = null') }
      // this.newTask = '';
    } else { alert('TodoList = null') }
  }


  public saveTasks(){

    localStorage.setItem(this.storageKey, JSON.stringify(this.toDoList)); 
    alert('Сохранено');
  }

  public loadTasks(){
    this.toDoList = JSON.parse(localStorage.getItem(this.storageKey));
    if (this.toDoList == null) {
      this.toDoList = [{ task: "Новая задача", isComplated: false}]
      // this.toDoList.push("Новая задача");
    }
  }

}




