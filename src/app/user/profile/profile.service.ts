import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = 'http://localhost:2020/';

  constructor(private http: HttpClient) { }


  updateUser(userData: any, token: any) {
    return this.http.put(this.url + 'user/', userData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }
}
