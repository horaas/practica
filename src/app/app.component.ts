import { Component } from '@angular/core';
import { YesornotService } from './yesornot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public response$;
  constructor(private yesOrNot: YesornotService) {
  }

  prueba() {
    //const valorResponse = (response) => this.response = response;
    this.response$ = this.yesOrNot.callServiceCallYesOrNot();
    console.dir(this.response$);
  }
}
