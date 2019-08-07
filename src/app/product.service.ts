import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProduct()
  {
    return this.http.get('http://192.168.1.101:2003/getProductDetails')
  }
}
