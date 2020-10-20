import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:2020/';



  getItemsBySubCategory(category: any, subCategory: any) {
    return this.http.get(this.url + category + '/' + subCategory);
  }

  getElectronisItemsByCategory(subCategory: any) {
    return this.http.get(this.url + subCategory);
  }
}
