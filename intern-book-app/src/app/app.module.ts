import { FormsModule } from '@angular/forms';
import { NgModule, ApplicationRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent, Dialog } from './components/card/card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ToolbarComponent,
    CardComponent,
    Dialog
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
