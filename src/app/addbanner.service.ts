import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class AddbannerService { 
           
  private userURL = "http://localhost:8080/v1";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }

  public addcategory(data) 
  {
    let promise = new Promise((resolve, reject) => {
    return this.http.post( this.userURL+'/banner/post ', JSON.stringify(data), { headers: this.headers}).toPromise() .then(
      (res:Response) => { 
      console.log(res)
        this.userdata = res.json();
     console.log(this.userdata);
        console.log(this.userdata['status']);
      
    
        if(this.userdata['status'] == "SUCCESS")  
        {
          this.router.navigate(['/viewbanner'])
         
        }
        else
        {     
        
        }
       
      })
    })
  }
}