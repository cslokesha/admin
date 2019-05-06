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
export class AddimageService { 
           

  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,) { }
  
  public addImage1=function(imageadd) 
  { 
    console.log(imageadd)

    let promise = new Promise((resolve, reject) => {
      
      return this.http.post( "http://localhost:8080/v1/control/post/ImageModel", imageadd).toPromise() .then(
        (res:Response) => { 
            
          this.userdata = res.json();
        
          console.log(this.userdata);
          if(this.userdata['status'] == "SUCCESS")  
          {
           
           this.router.navigate(['/viewimage']);
          }
          else
          {     
        
          }
         
        })
      })
    }






}


