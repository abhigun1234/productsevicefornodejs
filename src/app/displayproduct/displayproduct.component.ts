import { Component, OnInit } from '@angular/core';
import {MyService} from '..//my.service'
@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {
  productDetails;
  constructor(private service :MyService) { }

  ngOnInit() {
  }


  getProductDetails()
  {
    alert('product PaymentDetails')
    this.service.getProductDetails().subscribe(res=>{
    this.productDetails=res;
   
      console.log(res)
    })
  }
}
