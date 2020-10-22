import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserordersService {

  private url = 'http://localhost:2020/';

  constructor(private http: HttpClient) { }


  getUserOrderedData(token: any) {
    return this.http.get(this.url + 'cart/admin/orders/all', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  changeOrderStatus(data: any, token: any) {
    return this.http.put(this.url + 'cart/admin', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

}
