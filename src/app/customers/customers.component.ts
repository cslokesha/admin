import { CustomerlistService } from './../customerlist.service';
import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
public customerlist;
  constructor(private customer:CustomerlistService) { 
    this.customer.getproduct().subscribe((data)=>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.customerlist=response.data;
      console.log(this.customerlist)
    })
  }

  ngOnInit() {
    $(document).ready(function() {
      $('#customers').DataTable();
  } );
  }

}
