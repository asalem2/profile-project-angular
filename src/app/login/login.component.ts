import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import "rxjs/Rx";
import {type} from 'os';
import {map} from 'rxjs/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public input: any;

  constructor(private http: Http, private router: Router) {
    this.input = {
      "email": "",
      "password": ""
    };
  }

  public login(){
    if(this.input.email && this.input.password){
      let headers = new Headers({"content-type": "application/json"});
      let options = new RequestOptions({headers: headers});
      this.http.post("http://localhost:3000/login", JSON.stringify(this.input), options)
        .map(result => result.json())
        .subscribe(result => {
          this.router.navigate(["/blogs"], {"queryParams": result});
        });
    }
  }

  ngOnInit() {
  }

}
