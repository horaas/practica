import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarea2',
  templateUrl: './tarea2.component.html',
  styleUrls: ['./tarea2.component.css']
})
export class Tarea2Component implements OnInit {

  @Input() title;
  constructor() { }

  ngOnInit() {
  }

}
