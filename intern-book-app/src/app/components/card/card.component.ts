import { Component, Input} from '@angular/core';
import { bookList } from '../../types/mock-book';
import { Book } from '../../types/book';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() bookcard:Book = {
    name: "test",
    detail:"test",
    evaluation: 0
  };
}

