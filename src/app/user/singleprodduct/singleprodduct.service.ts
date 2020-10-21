import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SingleprodductService {

  private url = 'http://localhost:2020/';

  constructor(private http: HttpClient) { }



  getItemsBySubCategory(category: any, id: any) {
    return this.http.get(this.url + category + '/id/' + id);
  }

  getElectronisItemsByCategory(subCategory: any, id: any) {
    return this.http.get(this.url + subCategory + '/id/' + id);
  }

  postComment(commentData: any, token: any) {
    return this.http.post(this.url + 'comment', commentData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }

  getComments(producttype: any, productid: any, token: any) {
    return this.http.get(this.url + 'comment/' + producttype + '/' + productid, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }


  addToCart(cartData: any, token: any) {
    return this.http.post(this.url + 'cart', cartData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + token
      })
    });
  }
}
