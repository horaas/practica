import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YesornotService {

  public url: string = 'https://yesno.wtf/api';
  constructor(private http: HttpClient) {
  }

  callServiceCallYesOrNot(): Observable <any> {
    return this.http.get<any>(this.url).pipe(
      pluck('image'),
      // map((data: any) => {
      //   console.log(data.image);
      // })

      //observale tipos line que se ejecutan en el mismo momento
    );
  }
}
