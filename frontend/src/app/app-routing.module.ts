import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenusComponent } from './menus/menus.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"", component:LoginComponent},
  {path:"menus", component:MenusComponent},
  {path:"reviews", component:ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
