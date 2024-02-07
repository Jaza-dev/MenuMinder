import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenusComponent } from './menus/menus.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { RatingComponent } from './rating/rating.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { ModalCreateMenuComponent } from './modal-create-menu/modal-create-menu.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ModalEditMenuItemComponent } from './modal-edit-menu-item/modal-edit-menu-item.component';
import { ModalEditSubmenuComponent } from './modal-edit-submenu/modal-edit-submenu.component';
import { ModalEditMenuComponent } from './modal-edit-menu/modal-edit-menu.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenusComponent,
    ReviewsComponent,
    FooterComponent,
    RatingComponent,
    MenuDetailsComponent,
    RestaurantDetailsComponent,
    ModalCreateMenuComponent,
    SubmenuComponent,
    MenuItemComponent,
    ModalEditMenuItemComponent,
    ModalEditSubmenuComponent,
    ModalEditMenuComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
