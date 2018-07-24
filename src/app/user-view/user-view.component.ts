import { Component, OnInit } from '@angular/core';

import { UserTableComponent } from './user-table/user-table.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
