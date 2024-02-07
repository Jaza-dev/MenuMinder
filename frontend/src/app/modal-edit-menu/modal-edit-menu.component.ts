import { Component, Input } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-modal-edit-menu',
  templateUrl: './modal-edit-menu.component.html',
  styleUrls: ['./modal-edit-menu.component.css']
})
export class ModalEditMenuComponent {
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
