import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  private url = 'http://localhost:2020/';

  constructor(private http: HttpClient) { }


  getCartdata(userid: any, token: any) {
    return this.http.get(this.url + 'cart/' + userid, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  deleteFromCart(cartid: any, token: any) {
    return this.http.delete(this.url + 'cart/' + cartid, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

}
