import { Component} from '@angular/core';
import { bookList } from '../../types/mock-book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books = bookList;
}

