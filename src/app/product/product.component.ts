import { Component, OnInit } from '@angular/core';
import {ProductService} from '..//product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productList;
  constructor(public prodService:ProductService) { }

  ngOnInit() {
  } 
  getProductDetails()

  { alert('get')
    this.prodService.getProduct().subscribe(res=>{

    console.log(res)
    this.productList=res
  })

  }

}
