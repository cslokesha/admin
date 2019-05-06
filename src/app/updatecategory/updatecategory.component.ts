import { ViewcategoryService } from './../viewcategory.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  private categoryName=localStorage.getItem("categoryName");
  private description=localStorage.getItem("description");
  private categoryId=localStorage.getItem("categoryId");
  constructor(private view:ViewcategoryService,private router:Router) { }
  validation=function(info){
    info.categoryId = this.categoryId;
    console.log(info)
    console.log("inside update")
   

    this.view.updatecategory(info)
    
  }
  ngOnInit() {
  }

}
