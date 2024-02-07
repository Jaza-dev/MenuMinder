import { Component, Input } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { Submenu } from '../models/submenu';
import { MenuItem } from '../models/menuItem';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {

  constructor(private menuService:MenuService){}

  @Input() menu:Menu = new Menu();
  @Input() submenu:Submenu = new Submenu();
  @Input() page:number = 0;
  @Input() submenuIndex:number = 0;

  saveMessage:string = "";

  addItem(submenu:Submenu){
    submenu.items.push(new MenuItem());
    this.saveMenu(this.menu);
  }

  saveMenu(menu:Menu){
    this.menuService.saveMenu(menu).subscribe(
      (resp:any)=>{
        this.saveMessage = resp["message"];
      }
    )
  }
}
