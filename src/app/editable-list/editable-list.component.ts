import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// uses standalone component
@Component({
  standalone: true,
  imports: [BrowserModule],
  selector: 'app-editable-list',
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.scss'],
})
export class EditableListComponent {
  // Define Input decorator
  @Input() heading = 'TODO';

  // Define Output decorator
  @Output() todoListUpdate = new EventEmitter<Object>(undefined);

  // string array list
  public list: string[] = [];

  // add item in the list
  addItem(item: string) {
    this.list.push(item);
    this.emitValue(item, 'add');
  }

  // remove item in from list
  removeItem(index: number) {
    const todo = this.list[index];
    this.list.splice(index, 1);
    this.emitValue(todo, 'remove');
  }

  //emit value and action
  emitValue(value: string, action: string) {
    this.todoListUpdate.emit({ value, action });
  }
}
