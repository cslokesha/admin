import { AddimageService } from './../addimage.service';
import { ViewbannerService } from './../viewbanner.service';
import { Component, OnInit } from '@angular/core';
import { ViewcategoryService } from '../viewcategory.service';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {
public categorylist;
public bannerlist;
  constructor(private view:ViewcategoryService,private view1:ViewbannerService,private add:AddimageService) {
    this.view.getcategory().subscribe((data)=>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.categorylist=response.data;
      console.log(this.categorylist)
    }),
    this.view1.getbanner().subscribe((data)=>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.bannerlist=response.data;
      console.log(this.bannerlist)
    })
  }

  imageadd = {
    "bannerModel": {
      "bannerArea": ""
     
    },
    "categoryDomain": {
    
      "categoryName": ""
     
    },
    "desc1": "",
    "desc2": "",
    "desc3": "",
    "desc4": "",
    "desc5": "",
    "header": "",
    "imageName": "",
    "imagePath": "",
    "imageSequenceNo": ""
  }
  validation(data){
    this.imageadd["bannerModel"].bannerArea=data.bannerArea;
    this.imageadd["categoryDomain"].categoryName=data.categoryName;
    this.imageadd.imagePath=data.imagePath;
    this.imageadd.imageSequenceNo=data.imageSequenceNo;
    this.imageadd.header=data.header;
    this.imageadd.imageName=data.imageName;
    this.imageadd.desc1=data.desc1;
    this.imageadd.desc2=data.desc2;
    this.imageadd.desc3=data.desc3;
    this.imageadd.desc4=data.desc4;
    this.imageadd.desc5=data.desc5;
        this.add.addImage1(this.imageadd);
       
      }
  ngOnInit() {
  }

}
