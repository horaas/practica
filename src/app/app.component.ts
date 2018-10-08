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

 constructor() {
   this.tasks = [
     {
    task: 'tarea1',
    state: 'progress'
     },
     {
    task: 'tarea2',
    state: 'progress'
     },
     {
    task: 'tarea3',
    state: 'progress'
     },
     {
    task: 'tarea4',
    state: 'progress'
     },
   ];
 }

  removeTask(event) {
    this.tasks = this.tasks.filter(value => value.task !== event);
  }

  addNewTask(event) {
    if (event.target.value) {
      this.newTask = {
        task: event.target.value,
        state: 'progress'
      };

      this.tasks.push(this.newTask);
      event.target.value = '';
    }
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
