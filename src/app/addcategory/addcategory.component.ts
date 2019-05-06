import { AddcategoryService } from './../addcategory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private add:AddcategoryService) { }
  validation=function(data){
    console.log(data)
   
    this.add.addcategory(data);
    
  }

  ngOnInit() {
  }

}
