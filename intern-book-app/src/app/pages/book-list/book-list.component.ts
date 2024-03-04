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
  DisaddBook(book:Book) {
    //books配列でbookが最初に見つかった場所
    const indexbook = this.books.indexOf(book);
    if (indexbook !== -1) {
      //削除する場所と数の指定
      this.books.splice(indexbook, 1);
    }
  }
}