import { ViewimageService } from './../viewimage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.component.html',
  styleUrls: ['./viewimage.component.css']
})
export class ViewimageComponent implements OnInit {
public imagelist;
  constructor(private view:ViewimageService,private router:Router) { 
    this.view.getimage().subscribe(data =>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.imagelist=response.data;
      console.log(this.imagelist);
     })

  }

  editimage(list){
    
   
      let desc1 = list.desc1;
         localStorage.setItem("desc1", desc1)
         let desc2 = list.desc2;
         localStorage.setItem("desc2", desc2)
         let desc3 = list.desc3;
         localStorage.setItem("desc3", desc3)
         let desc4 = list.desc4;
         localStorage.setItem("desc4", desc4)
         let desc5 = list.desc5;
         localStorage.setItem("desc5", desc5)
         let imageSequenceNo = list.imageSequenceNo;
        localStorage.setItem("imageSequenceNo", imageSequenceNo)
        let imagePath = list.imagePath;
        localStorage.setItem("imagePath", imagePath)
        let imageName = list.imageName;
        localStorage.setItem("imageName", imageName)
        let header = list.header;
        localStorage.setItem("header", header)
        let imageId = list.imageId;
        localStorage.setItem("imageId", imageId)
        this.router.navigate(['/updateimage'])
  }
  delete(id:number){
    alert("Are you sure ")
    console.log(id)
    this.view.delete(id);
    this.router.navigate(['/addimage'])
  }
  ngOnInit() {
  }

}
