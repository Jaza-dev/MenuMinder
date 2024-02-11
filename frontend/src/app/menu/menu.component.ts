import { Component, Input } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { Menu } from '../models/menu';
import { Submenu } from '../models/submenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private menuService:MenuService, private route:ActivatedRoute){}

  @Input() restaurant:Restaurant = new Restaurant();
  menu:Menu = new Menu();
  @Input() menuId:string = "";
  @Input() enableEditing:boolean = false;
  currentPage:number = 1;

  saveMessage:string = "";

  ngOnInit(): void {
    let data = sessionStorage.getItem("restaurant");
    if(data !== null)
      this.restaurant = JSON.parse(data);
    this.getMenu(this.menuId);
  }

  getMenu(_id:string){
    this.menuService.getMenu(_id).subscribe(
      (resp:any)=>{
        this.menu = resp['message'];
      }
    )
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  addPage(){
    let newPage = this.menu.pages.length + 1;
    this.menuService.addPage(this.menu._id, newPage).subscribe(
      (resp:any)=>{
        this.menu = resp['message'];
        this.currentPage=newPage;
      }
    )
  }

  addSubmenu(page:number){
    this.menu.pages[page-1].push(new Submenu());
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
