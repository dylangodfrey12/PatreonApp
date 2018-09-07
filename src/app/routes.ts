import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./Login/login.component";
import {Routes} from '@angular/router';
import { AppComponent } from "./app.component";

export const appRoutes:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'home/login', component: LoginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]    