import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRootSecondComponent } from './app-root-second/app-root-second.component';

import { FormsModule } from '@angular/forms';
import { UserTableComponent } from './user-table/user-table.component';
import { UserListComponent } from './user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AppRootSecondComponent,
    UserTableComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppRootSecondComponent]
})
export class AppModule { }
