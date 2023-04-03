import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Output() taskState = new EventEmitter();


  public triggerCheckbox($event: any) {
    if($event.target.checked) {
      this.taskState.emit('taskDone');
    } else {
      this.taskState.emit('taskTodo');
    }
  }
}
