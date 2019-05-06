import { ViewimageService } from './../viewimage.service';
import { UpdateimageService } from './../updateimage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateimage',
  templateUrl: './updateimage.component.html',
  styleUrls: ['./updateimage.component.css']
})
export class UpdateimageComponent implements OnInit {
  private desc1=localStorage.getItem("desc1");
  private desc2=localStorage.getItem("desc2");
  private desc3=localStorage.getItem("desc3");
  private desc4=localStorage.getItem("desc4");
  private desc5=localStorage.getItem("desc5");
  private header=localStorage.getItem("header");
  private imagePath=localStorage.getItem("imagePath");
  private imageSequenceNo=localStorage.getItem("imageSequenceNo");
  private imageName=localStorage.getItem("imageName");
  private imageId=localStorage.getItem("imageId");
  constructor(private view:ViewimageService) { }
  validation=function(info){
    info.imageId = this.imageId;
    console.log(info)
   
   

    this.view.updateimage(info)
    
  }
  ngOnInit() {
  }

}
