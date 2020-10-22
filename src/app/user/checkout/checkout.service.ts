import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckoutService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:2020/';


  getUserCartData(userid: any, id: any, token: any) {
    return this.http.get(this.url + 'cart/' + userid + '/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  placeOrder(userDetails: any, token: any) {
    return this.http.put(this.url + 'cart/', userDetails, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    })
  }
}
