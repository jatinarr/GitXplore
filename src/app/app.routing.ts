import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component'; 
import {NavbarComponent} from './components/navbar/navbar.component'; 
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';  

const appRoutes: Routes=[

    {
        path:'',
        component:HomeComponent
    },

    {
        path:'about',
        component:AboutComponent

    },

    {
        path:'contact',
        component:ContactComponent

    }

]

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);