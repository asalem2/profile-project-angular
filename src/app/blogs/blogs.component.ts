//This file follows a similar strategy to how we handled login and registration.



import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
import "rxjs/Rx";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  private sid: string;
  public input; any;

  public constructor(pivate http: Http, private route: ActivatedRoute, private location: Location){
    this.input = {
      "title": "",
      "content": ""
    };
  }

  public ngOnInit(){
      this.route.queryParams.subscribe(params => {
        this.sid = params["sid"];
      });
  }

  public save(){
    if(this.input.title && this.input.content){
      let headers = new Headers({
        "conent-type": "application/json",
        "authorization": "Bearer " + this.sid
      });
      let options = new RequestOptions({headers: headers});
      this.http.post("http://localhost:3000/blog", JSON.stringify(this.input), options)
        .map(result => result.json())
        .subscribe(result => {
          this.location.back();
        });
    }
  }



  // public entries: Array<any>;
  //
  // constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
  //   this.entries = [];
  // }
  //
  // ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //     this.sid = params["sid"];
  //     let headers = new Headers({"authorization": "Bearer " + params["sid"]});
  //     let options = new RequestOptions({headers: headers});
  //     this.http.get("http://localhost:3000/blogs", options)
  //       .map(result => result.json())
  //       .subscribe(result => {
  //         this.entries = result;
  //       });
  //   });
  // }
  //
  // public create(){
  //   this.router.navigate(["/blog"], {"queryParams": {"sid": this.sid}});
  // }

//}
