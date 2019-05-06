import { ActivatedRoute } from '@angular/router';
import { ViewproductService } from './../viewproduct.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  public productlist;
  public productMap = {};

  constructor(private view: ViewproductService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.view.getproduct().subscribe(data => {
      let res: any = data;
      let response = JSON.parse(res._body);
      this.productlist = response.data;
      console.log(this.productlist);
    })
  }

  ngOnInit() {
    let ProductID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(` ## route parameter ${ProductID}`)
    this.view.getProductById(ProductID).subscribe((response) => {

      response = response.json();
      let data: any = response;

      let test = data.data;

      this.productMap = test;

      console.log(`## response from http getproduct by id${response}`)
      console.log(this.productMap);

    })
  }

}
