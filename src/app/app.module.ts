import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { AppRootSecondComponent } from './app-root-second/app-root-second.component';

import { FormsModule } from '@angular/forms';
import { UserTableComponent } from './user-view/user-table/user-table.component';
import { UserListComponent } from './user-view/user-list/user-list.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { UserViewComponent } from './user-view/user-view.component';
@NgModule({
  declarations: [
    AppComponent,
    AppRootSecondComponent,
    UserTableComponent,
    UserListComponent,
    ToDoListComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([ // Настройка маршрута
        { path: "todo", component:ToDoListComponent},
        { path: "click", component: UserViewComponent },
        { path:"", component: ToDoListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
