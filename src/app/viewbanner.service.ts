import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})

export class ViewbannerService {
  private headers = new Headers({'Content-Type' :'application/json'})
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 

  constructor(private http: Http, private router: Router,) { }

  updatebanner(info) {
    console.log(info)
    return this.http.put(`http://localhost:8080/v1/banner/update/`, info).subscribe(result=>{
      this.router.navigate(['/viewbanner'])
    
     },error=>console.log('there was an error:',error));
}


delete(id:number){
  return this.http.delete(`http://localhost:8080/v1/banner/delete/` + id).subscribe(result=>{
    
     },error=>console.log('there was an error:',error));

}

  getbanner(){
    let url = 'http://localhost:8080/v1/banner/getall';
    return this.http.get(url,{ headers: this.headers}).map(data => {
      let res = data;
       console.log(res); 
       return res;
  })
}



}
