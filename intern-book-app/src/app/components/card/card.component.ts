import { Component, Input} from '@angular/core';
import { bookList } from '../../types/mock-book';
import { Book } from '../../types/book';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  books = bookList;
  @Input() book: Book[]= bookList;
  @Input() bookname:string ='Book';
  @Input() bookdetail:string ='Book';
  @Input() bookevaluation:number =0;
}

