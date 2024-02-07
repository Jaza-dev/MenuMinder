import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenusComponent } from './menus/menus.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"", component:LoginComponent},
  {path:"menus", component:MenusComponent},
  {path:"reviews", component:ReviewsComponent},
  {path:"restaurant-details", component:RestaurantDetailsComponent},
  {path:"menu-details", component:MenuDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
