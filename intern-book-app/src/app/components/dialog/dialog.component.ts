import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.html'
})
export class DialogComponent {
    constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
    cancel(): void {
        this.dialogRef.close();
    }
}