import { Component } from '@angular/core';
import { Modelo } from './modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Total: ';
  public tasks: Modelo[];
  public newTask: Modelo;
  public valor: any = 'default';
  public selectAll: boolean = true;
  public prueba: any[];

  constructor() {
    this.tasks = [
      {
        id: 0,
        task: 'tarea1',
        state: 'progress'
      },
      {
        id: 1,
        task: 'tarea2',
        state: 'progress'
      },
      {
        id: 2,
        task: 'tarea3',
        state: 'progress'
      },
      {
        id: 3,
        task: 'tarea4',
        state: 'progress'
      },
    ];
  }

  removeTask(event) {
    this.tasks = this.tasks.filter(value => value.id !== event);

    this.tasks = this.tasks.map((task, index) => {
      task.id = index;
      return task;
    });
    console.dir(this.tasks);
  }

  addNewTask(event) {
    if (event.target.value) {
      this.newTask = {
        id: this.tasks.length,
        task: event.target.value,
        state: 'progress'
      };

      this.tasks.push(this.newTask);
      event.target.value = '';
    }
    console.dir(this.tasks);
  }

  selectTask(event, index) {
    if (event) {
      this.tasks[index].state = 'complete';
    } else {
      this.tasks[index].state = 'progress';
    }
  }

  removeTaskCompleted() {
    console.log(this.tasks);
    this.tasks = this.tasks.filter(value => value.state === 'progress');
  }

  selectAlltasks() {
    if (this.selectAll) {

      this.tasks = this.tasks.map(task => {
        task.state = 'complete';
        return task;
      });
      this.selectAll = false;

    } else {

      this.tasks = this.tasks.map(task => {
        task.state = 'progress';
        return task;
      });
      this.selectAll = true;

    }
  }
}
