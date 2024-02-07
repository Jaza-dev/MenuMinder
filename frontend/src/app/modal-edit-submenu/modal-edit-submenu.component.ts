import { Component, Input } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { Submenu } from '../models/submenu';

@Component({
  selector: 'app-modal-edit-submenu',
  templateUrl: './modal-edit-submenu.component.html',
  styleUrls: ['./modal-edit-submenu.component.css']
})
export class ModalEditSubmenuComponent {
  @Input() submenu:Submenu = new Submenu();
  @Input() menu:Menu = new Menu();
  show: boolean = false;
  saveMessage:string = "";

  constructor(private menuService:MenuService, private router:Router){}

  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }

  saveMenu(menu:Menu){
    this.menuService.saveMenu(menu).subscribe(
      (resp:any)=>{
        this.saveMessage = resp["message"];
        this.closeModal();
      }
    )
  }
}
