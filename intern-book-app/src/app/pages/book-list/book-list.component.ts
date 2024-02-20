import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})


export class BookListComponent {
  bookTitle: string = ''; 
  bookarasuji: string = ''; 
  rate: number = 1; 
  addBook() {
    console.log('Adding book:', this.bookTitle, this.bookarasuji, this.rate);
    
  }

}
