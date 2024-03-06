import { Component, Input} from '@angular/core';
import { bookList } from '../../types/mock-book';
import { Book } from '../../types/book';
import { Output, EventEmitter } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() bookcard: Book = {
    name: "test",
    detail: "test",
    evaluation: 0
  };
  @Output() deleteBookEvent = new EventEmitter<Book>();

  constructor(public dialog: MatDialog) {}

  deleteBook(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteBookEvent.emit(this.bookcard);
      }
    });
  }
}

  @Component({
    selector: 'app-dialog',
    templateUrl: './dialog.html'
  })

  export class Dialog {
    constructor(public dialogRef: MatDialogRef<Dialog>) {}
    cancel(): void {
      this.dialogRef.close();
    }
  }
  
  