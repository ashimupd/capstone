import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:2020/user/login';

  submitLogin(userData: any){
    return this.http.post<any>(this.url, userData);

  }

}
