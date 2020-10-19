import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:2020/';


  getDataByType(type: string) {
    return (this.http.get(this.url + 'userindexpage/' + type));
  }

}
