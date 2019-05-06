
import { Http,Headers,Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
private userURL="http://localhost:8080/v1/signin";
private headers=new Headers({'content-type':'application/json'})
public loggedStatus=false;

  constructor(private http:Http, private router: Router,private activated:ActivatedRoute) { }
  
setLoggedIn(value:boolean){
  this.loggedStatus=value;
}
get isLoggedIn(){
  return this.loggedStatus;

}

  public addadmin(data){
let promise=new Promise((resolve,reject)=>{
  return this.http.post(this.userURL,JSON.stringify(data),{headers:this.headers}).toPromise().then((res:Response)=>{

let result= res.json()
sessionStorage.setItem('logincustomer',JSON.stringify(result));
let r=result.status;
if( r=="ERROR"){
  alert("invalid username/password")
}
else{
  alert("hai punith ")
this.setLoggedIn(true);
  this.router.navigate(['/dashboard']);
   
}
  })

})
  }
  
}
