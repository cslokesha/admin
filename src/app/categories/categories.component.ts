import { ViewcategoryService } from './../viewcategory.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

 
categorylist:any;

  constructor(private viewcategoryService:ViewcategoryService,private router:Router) {
    this.viewcategoryService.getcategory().subscribe(data =>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.categorylist=response.data;
      console.log(this.categorylist)
      
     })
       }
      //  editcategory(list){
      //   this.viewcategoryService.updatecategory(list)
       
      //     let categoryName = list.categoryName;
      //        localStorage.setItem("categoryName", categoryName)
      //        let description = list.description;
      //       localStorage.setItem("description", description)
      //       let categoryId = list.categoryId;
      //       localStorage.setItem("categoryId", categoryId)
    
      // }
      // delete(id:number){
      //   alert("Are you sure ")
      //   console.log(id)
      //   this.viewcategoryService.delete(id);
      //   location.reload();
      // }
  ngOnInit() {
    $(document).ready(function() {
      $('#categories').DataTable();
  } );

  $(document).ready(function() {
    $('#sub-categories').DataTable();
} );
  }

}
