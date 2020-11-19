import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddToDoListComponent } from './to-do-list/add-to-do-list/add-to-do-list.component';
import { DisplayToDolistComponent } from './to-do-list/display-to-dolist/display-to-dolist.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    AddToDoListComponent,
    DisplayToDolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
