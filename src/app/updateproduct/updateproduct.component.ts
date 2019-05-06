import { ViewproductService } from './../viewproduct.service';
import { UpdateproductService } from './../updateproduct.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  private blouseColor=localStorage.getItem("blouseColor");
  private blouseLength=localStorage.getItem("blouseLength");
  private border=localStorage.getItem("border");
  private borderType=localStorage.getItem("borderType");
  private collectionDesc=localStorage.getItem("collectionDesc");
  private colors=localStorage.getItem("colors");
  private discount=localStorage.getItem("discount");
  private fabricPurity=localStorage.getItem("fabricPurity");
  private headerDesc=localStorage.getItem("headerDesc");
  private inStock=localStorage.getItem("inStock");
  private length=localStorage.getItem("length");
  private mainImageUrl=localStorage.getItem("mainImageUrl");
  private materialType=localStorage.getItem("materialType");
  private occassion=localStorage.getItem("occassion");
  private pattern=localStorage.getItem("pattern");
  private price=localStorage.getItem("price");
  private sku=localStorage.getItem("sku");
  private imagePath=localStorage.getItem("imagePath");
  private productId=localStorage.getItem("productId");

  constructor(private update:ViewproductService) { }
  validation(info){
    info.productId = this.productId;
   this.update.updateproduct(info)
  }
  ngOnInit() {
  }

}
