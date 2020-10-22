import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:2020/';


  getUserOrderedData(userid: any, token: any) {
    return this.http.get(this.url + 'cart/user/orders/' + userid, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }
}
