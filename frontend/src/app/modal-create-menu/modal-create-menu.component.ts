import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-modal-create-menu',
  templateUrl: './modal-create-menu.component.html',
  styleUrls: ['./modal-create-menu.component.css']
})
export class ModalCreateMenuComponent {

  show: boolean = false;
  menu:Menu = new Menu();
  @Input() restaurantId:string = "";

  constructor(private menuService:MenuService, private router:Router){}

  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }

  createMenu(){
    console.log(this.restaurantId)
    this.menu.restaurantId=this.restaurantId;
    this.menuService.createMenu(this.menu).subscribe(
      (resp:any)=>{
        this.menu = resp['message'];
        this.router.navigate(['menu-details'], { queryParams: { _id: this.menu._id } });
      }
    )
    this.closeModal();
  }

}
