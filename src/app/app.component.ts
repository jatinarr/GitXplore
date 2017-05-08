import { Component } from '@angular/core';
import {GitHubService} from './services/github.service';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[GitHubService]
})
export class AppComponent  {  }
