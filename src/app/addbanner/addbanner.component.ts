import { AddbannerService } from './../addbanner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.css']
})
export class AddbannerComponent implements OnInit {

  constructor(private add:AddbannerService) { }
  validation=function(data){
    console.log(data)
   
    this.add.addcategory(data);
    
  }
  ngOnInit() {
  }

}
