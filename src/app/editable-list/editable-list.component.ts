import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [BrowserModule],
  selector: 'app-editable-list',
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.scss'],
})
export class EditableListComponent {
  @Input() heading = 'TODO';
  @Output() todoListUpdate = new EventEmitter<Object>(undefined);
  public list: string[] = [];

  addItem(item: string) {
    this.list.push(item);
    this.todoListUpdate.emit({ value: item, action: 'add' });
  }
  removeItem(index: number) {
    const todo = this.list[index];
    this.list.splice(index, 1);
    this.todoListUpdate.emit({ value: todo, action: 'remove' });
  }
}
