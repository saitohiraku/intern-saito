import { FormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookListComponent } from './pages/book-list/book-list.component';

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }