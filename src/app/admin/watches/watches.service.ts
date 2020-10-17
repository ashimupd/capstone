import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WatchesService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:2020/';

  // tslint:disable-next-line: typedef
  uploadImage(watchesImage) {
    return this.http.post(this.url + 'upload/image', watchesImage);
  }

  addItem(watchesData, token) {
    return this.http.post(this.url + 'watches', watchesData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  updateItem(watchesData, token) {
    return this.http.put(this.url + 'watches', watchesData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  deleteItem(clothindData, token) {
    return this.http.delete(this.url + 'watches/' + clothindData.id,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  getallItems(token) {
    return this.http.get(this.url + 'watches', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

}
