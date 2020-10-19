import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabletService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:2020/';

  // tslint:disable-next-line: typedef
  uploadImage(tabletImage) {
    return this.http.post(this.url + 'upload/image', tabletImage);
  }

  addItem(tabletData, token) {
    return this.http.post(this.url + 'tablet', tabletData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  updateItem(tabletData, token) {
    return this.http.put(this.url + 'tablet', tabletData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  deleteItem(clothindData, token) {
    return this.http.delete(this.url + 'tablet/' + clothindData.id,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  getallItems(token) {
    return this.http.get(this.url + 'tablet', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }
}
