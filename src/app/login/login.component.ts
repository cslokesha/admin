import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService) { }
post(data){
this.login.addadmin(data);
}

  ngOnInit() {
    // $(".sidebar").css('opacity', '0.6');

    // $('.header').hide();
  }

}
