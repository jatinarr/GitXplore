import { Component } from '@angular/core';
import {GitHubService} from '../../services/github.service'
@Component({
   moduleId:module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent  { 

  user:any;
  repos:any[];
  username:string;
  blog:string;

  constructor(private _githubService:GitHubService){
    this.user=false;
    this._githubService.getUser().subscribe(user => 
    
    {
      console.log(user);
    });

    //  this._githubService.getRepos().subscribe(repos => 
    
    // {
    //   console.log(repos);
    // });


  }

  searchUser(){

    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => 
    this.user=user);
    this._githubService.getRepos().subscribe(repos => 
   this.repos=repos);
  }

  visitBlog():string {
    this.blog='http://'
    var regex=/http/;
    if(this.user.blog.search(regex)==-1)
      return this.blog.concat(this.user.blog);
      
    return this.user.blog;

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