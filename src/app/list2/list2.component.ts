import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  @Output() namber2 = new EventEmitter <number>();

  constructor() { }

  ngOnInit() {
  }
//  onChangeTitle(title: string) {
//    this.changeTitle.emit(title);
//  }

  sumaValor2(numero){
    if(numero) {
      this.namber2.emit(parseInt(numero));
    } else {
      this.namber2.emit(0);
    }
  }

}
