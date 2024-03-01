import { Component} from '@angular/core';
import { NgFor} from '@angular/common';
import { bookList } from '../../types/mock-book';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})


export class BookListComponent {
 books = bookList;
}

