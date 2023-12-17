import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // listen event
  onTodoListUpdate(data: object) {
    console.log(data);
  }
}
