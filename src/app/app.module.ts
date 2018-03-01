import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { TableListComponent } from './table-list/table-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
