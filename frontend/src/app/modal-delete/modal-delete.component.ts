import { Component, Input } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';
import { Menu } from '../models/menu';
import { Submenu } from '../models/submenu';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent {

  show: boolean = false;
  selectedPage: number = 0;

  @Input() menu:Menu = new Menu();
  @Input() page:number = 0;
  @Input() submenuIndex:number = 0;
  @Input() menuItemIndex:number = 0;
  @Input() type:number = 0;

  saveMessage:string = "";
  deleteMessage:string = "";

  constructor(private menuService:MenuService, private router:Router){}

  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }

  deleteComponent(){
    if(this.type===1){
      this.deleteMenu(this.menu._id);
    }else if(this.type===2){
      this.deleteSubmenu();
      this.saveMenu(this.menu);
    }else if(this.type===3){
      this.deleteMenuItem();
      this.saveMenu(this.menu);
    }else if(this.type == 4){
      this.deletePage();
      this.saveMenu(this.menu);
    }
    this.closeModal();
  }

  saveMenu(menu:Menu){
    this.menuService.saveMenu(menu).subscribe(
      (resp:any)=>{
        this.saveMessage = resp["message"];
        this.closeModal();
      }
    )
  }

  deleteMenu(_id:string){
    this.menuService.deleteMenu(this.menu._id).subscribe(
      (resp:any)=>{
        this.deleteMessage = resp["message"];
        this.router.navigate(['/menus']);
      }
    )
  }

  deleteSubmenu(){
    this.menu.pages[this.page].splice(this.submenuIndex,1);
  }

  deleteMenuItem(){
    this.menu.pages[this.page][this.submenuIndex].items.splice(this.menuItemIndex,1);
  }

  deletePage(){
    this.menu.pages.splice(this.selectedPage,1);
  }

}
