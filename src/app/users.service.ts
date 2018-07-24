import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // users : Array<any> = [
  //   {firstName: 'Ivan', lastName: 'Ivanov'},
  //   {firstName: 'Petr', lastName: 'Petrov'},
  //   {firstName: 'Vasya', lastName: 'Hmuriy'},
  // ];

public clickCount: number = 0;
public creationDate: Date = new Date();

  constructor() { }

  public increase(){
    this.clickCount++;
  }

  public getUsers(): Array<any> {
    return [
      { firstName: 'Ivan', lastName: 'Ivanov' },
      { firstName: 'Petr', lastName: 'Petrov' },
      { firstName: 'Vasya', lastName: 'Hmuriy' },
    ];
  }
}
