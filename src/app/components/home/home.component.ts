import { Component } from '@angular/core';
import {GitHubService} from '../../services/github.service'
@Component({
   moduleId:module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent  { 

  userDetails:any;
  repos:any[];
  username:string;
  blog:string;
  // pressed:boolean;
  goBtn:boolean;
  count:number;

  constructor(private _githubService:GitHubService){

   // this.pressed=false;
  this.goBtn=false;
  this.count=0;



}

go(){

  this.goBtn=true;
  this.searchUser();

}


ClearFields() {

//   var value = parseFloat((<HTMLInputElement>document.getElementById("searchField")).value);
// var unit = (<HTMLInputElement>document.getElementById("searchField")).value; 

(<HTMLInputElement>document.getElementById("searchField")).value="";

}

changePressed(){

  if(this.count==1) {
  
    // this.pressed=true;
    // this.goBtn=true; 
  }

  else {
// this.pressed=false;
    this.goBtn=false; 

  }

  if(this.count==0){
    this.count=1; 
}
  else
    this.count=0;

    // console.log(this.count);

}


  searchUser(){

  if(this.count==1){

    this.searchUserDynamic();
  }

  // this._githubService.updateUser(this.username);
  else {

 if(this.goBtn){

     this._githubService.updateUser(this.username);
      this._githubService.getUser()
      .subscribe(res => {
        this.userDetails=res;
      });


      this._githubService.getRepos()
      .subscribe(repo => {
        this.repos=repo;
      });
 }
 this.goBtn=false;

  }

 }

 
 searchUserDynamic(){

 
    this._githubService.updateUser(this.username);

    this._githubService.getUser()
    .subscribe(res => {
      this.userDetails=res;
    });


    this._githubService.getRepos()
    .subscribe(repo => {
      this.repos=repo;
    });
  }

visitBlog():string {
    this.blog='http://'
    var regex=/http/;
    if(this.userDetails.blog.search(regex)==-1)
      return this.blog.concat(this.userDetails.blog);
      
    return this.userDetails.blog;

  }
  
  createDate(oldDate:string):string {
    var monthArr=['January','February','March','April','May'
    ,'June','July','August','September','October','November', 'December'];

    var day=oldDate.substr(8,10);
    var month=oldDate.substr(5,7);
    var year=oldDate.substr(0,4);

    var newDate=day + ' ' +monthArr[parseInt(month)-1] + ', ' 
    + year;

    return newDate;

  }

}