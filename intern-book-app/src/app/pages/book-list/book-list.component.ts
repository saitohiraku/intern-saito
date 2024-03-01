import { Component} from '@angular/core';
import { bookList } from '../../types/mock-book';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books :Book[] = bookList;
  newbook:Book= { name: "", detail: "", evaluation:0, };
  addBook(){
    this.books.push({ ...this.newbook });
  }

}

