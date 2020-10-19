import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserindexpageService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:2020/';

  // tslint:disable-next-line: typedef
  uploadImage(userindexpageImage) {
    return this.http.post(this.url + 'upload/image', userindexpageImage);
  }

  addItem(userindexpageData, token) {
    return this.http.post(this.url + 'userindexpage', userindexpageData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  updateItem(userindexpageData, token) {
    return this.http.put(this.url + 'userindexpage', userindexpageData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  deleteItem(clothindData, token) {
    return this.http.delete(this.url + 'userindexpage/' + clothindData.id,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  getallItems(token) {
    return this.http.get(this.url + 'userindexpage', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }
}
