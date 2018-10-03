import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea2',
  templateUrl: './tarea2.component.html',
  styleUrls: ['./tarea2.component.css']
})
export class Tarea2Component implements OnInit {

  @Input() post;
  @Output() removePost = new EventEmitter<{}>();
  constructor() { }

  ngOnInit() {
  }

  onRemovePost(post) {
    this.removePost.emit(post);
  }
}
