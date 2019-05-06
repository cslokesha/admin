import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})

export class ViewcategoryService {
  private headers = new Headers({'Content-Type' :'application/json'})
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 

  constructor(private http: Http, private router: Router,) { }

  updatecategory(info) {
    console.log(info)
    return this.http.put(`http://localhost:8080/v1/category/`, info).subscribe(result=>{
      this.router.navigate(['/view-category'])
    
     },error=>console.log('there was an error:',error));
}


delete(id:number){
  return this.http.delete(`http://localhost:8080/v1/category/` + id).subscribe(result=>{
    
     },error=>console.log('there was an error:',error));

}

  getcategory(){
    let url = 'http://localhost:8080/v1/category/all';
    return this.http.get(url,{ headers: this.headers}).map(data => {
      let res = data;
       console.log(res); 
       return res;
  })
}



}
