import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() namber1 = new EventEmitter <number>(); 

  constructor() { }

  ngOnInit() {
  }
//  onChangeTitle(title: string) {
//    this.changeTitle.emit(title);
//  }

  sumaValor1(numero){
    if(numero) {
      this.namber1.emit(parseInt(numero));
    } else {
      this.namber1.emit(0);
    }
  }

}
