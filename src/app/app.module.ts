import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EditableListComponent } from './editable-list/editable-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EditableListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
