import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComputerComponent } from './components/computer/computer.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [

   {path:'' , component:HomeComponent},
   {path:'computer' , component:ComputerComponent},
   {path:'mobile' , component:MobileComponent},
   {path:'contact' , component:ContactComponent},
   {path:'about' , component:AboutComponent}
   
];
