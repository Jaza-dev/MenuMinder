import { Component, Input } from '@angular/core';
import { MenuItem } from '../models/menuItem';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {

  
  constructor(private menuService:MenuService){}

  @Input() menuItem:MenuItem = new MenuItem();
  @Input() menu:Menu = new Menu();
  @Input() page:number = 0;
  @Input() submenuIndex:number = 0;
  @Input() menuItemIndex:number = 0;
  @Input() enableEditing:boolean = false;

  saveMessage:string = "";

  saveMenu(menu:Menu){
    this.menuService.saveMenu(menu).subscribe(
      (resp:any)=>{
        this.saveMessage = resp["message"];
      }
    )
  }
}
