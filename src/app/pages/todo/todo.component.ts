import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  public todoList: string[] = [];
  public taskState: string[] = [];

  private constructor() {
    this.todoList = JSON.parse(localStorage.getItem('todoList') ?? '[]');
  }

  public getTaskState($event: any, index: number) {
    this.taskState[index] = $event;
  }

  public deleteEntry(i: number) {
    this.todoList = this.todoList.filter((v, i2) => i != i2)
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  public onSubmit(form: NgForm) {
    if (form.value.todoInput.split(" ").length > 0 && form.value.todoInput) {
      this.todoList.push(form.value.todoInput);
      form.reset();
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  }
}
