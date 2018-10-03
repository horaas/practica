import { Component } from '@angular/core';
import { POSTS } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = "Total: ";
  public valor1: number = 0;
  public valor2: number = 0;

  public posts:PostInterface[];

  constructor() {
    this.posts = POSTS;
  }
  onRemovePost({id}) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
