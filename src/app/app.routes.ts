import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'services' ,component:ServicesComponent
    },
    {
        path:'about' ,component:AboutComponent
        },
    {
        path:'team' ,component:TeamComponent
    },
    {
        path:'contact' ,component:ContactComponent
    },
    {
        path:'Services' ,component:ServicesComponent
    },
];
