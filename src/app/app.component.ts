import { Component } from '@angular/core';
import { Modelo } from './modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title:string = "Total: ";
 public valor1: number = 0;
 public valor2: number = 0;
 public tasks: Modelo[];
 public newTask: Modelo;
 public valor: any= 'default';

 constructor() {
   this.tasks = [
     {
    task:'tarea1',
    state: 'progress'
     },
     {
    task:'tarea2',
    state: 'progress'
     },
     {
    task:'tarea3',
    state: 'progress'
     },
     {
    task:'tarea4',
    state: 'progress'
     },
   ];
 }

  removeTask(event) {
    console.log(event);
    this.tasks = this.tasks.filter(value => value.task !== event);
  }
 
  addNewTask(event) {
    if(event){
      this.newTask = {
        task:event,
        state: 'progress'
      }

      this.tasks.push(this.newTask);
    }
  }

  selectTask(event, index) {
    if(event) {
      this.tasks[index].state = "complete";
    } else {
      this.tasks[index].state = "progress";
    }
  }

  removeTaskCompleted() {
    console.log(this.tasks);
    this.tasks = this.tasks.filter(value => value.state === 'progress');
  }
 public posts:any[] = [
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  }
 ];

}
