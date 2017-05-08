import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GitHubService{

   private  username:string;
   private client_id:'1e59be68be452d2499c4';
   private client_secret: 'b607e5787e8180451bcf0f040b119a06f1908468';
    // user:any;
    // repos: any[];

    constructor(private _http: Http){
        console.log("github service ready....")
        this.username= 'bradtraversy';
        // this.user=false;
    }

    getUser(){

            return this._http.get
            ('http://api.github.com/users/'+ this.username
            + '?client_id=' + this.client_id + '&client_secret='+ this.client_secret)
            .map(res=>res.json())
   
    }

    getRepos(){

         return this._http.get
        ('http://api.github.com/users/'+ this.username
        + '/repos?client_id=' + this.client_id + '&client_secret='+ this.client_secret)
        .map(res=>res.json())

    }

    updateUser(username:string){

        this.username=username;
    }


}