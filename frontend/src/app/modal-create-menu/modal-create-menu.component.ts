import { Component, EventEmitter, Output } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { Menu } from '../models/menu';
import { Submenu } from '../models/submenu';

@Component({
  selector: 'app-modal-create-menu',
  templateUrl: './modal-create-menu.component.html',
  styleUrls: ['./modal-create-menu.component.css']
})
export class ModalCreateMenuComponent {

  show: boolean = false;
  menu:Menu = new Menu();

  constructor(private menuService:MenuService, private router:Router){}

  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }

  createMenu(){
    this.menuService.createMenu(this.menu).subscribe(
      (resp:any)=>{
        this.menu = resp['message'];
        this.router.navigate(['menu-details'], { queryParams: { _id: this.menu._id } });
      }
    )
    this.closeModal();
  }

}
