import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClothingsService {
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080/upload/image';
  private url2 = 'http://localhost:8080/clothings';

  uploadImage(clothingsImage){
    return this.http.post(this.url, clothingsImage);
  }

  SubmitData(clothingsData){
    return this.http.post(this.url2, clothingsData);
  }
}
