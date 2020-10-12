import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080/user';

  sugbmiSignUp(userData: any){
    return this.http.post<any>(this.url, userData);

  }
}
