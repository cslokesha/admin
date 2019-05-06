import { ViewbannerService } from './../viewbanner.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbanner',
  templateUrl: './viewbanner.component.html',
  styleUrls: ['./viewbanner.component.css']
})
export class ViewbannerComponent implements OnInit {
public bannerlist;
  constructor(private view:ViewbannerService,private router:Router) { 
    this.view.getbanner().subscribe((data)=>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.bannerlist=response.data;
      console.log(this.bannerlist)
    })
  }
  editbanner(list){
    // this.view.updatecategory(list)
   
      let bannerName = list.bannerName;
         localStorage.setItem("bannerName", bannerName)
         let bannerArea = list.bannerArea;
        localStorage.setItem("bannerArea", bannerArea)
        let bannerId = list.bannerId;
        localStorage.setItem("bannerId", bannerId)
        this.router.navigate(['/updatebanner'])
  }
  delete(id:number){
    alert("Are you sure ")
    console.log(id)
    this.view.delete(id);
    this.router.navigate(['/addbanner'])
  
  }
  ngOnInit() {
  }

}
