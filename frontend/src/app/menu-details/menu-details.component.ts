import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { MenuService } from '../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../models/menu';
import { Submenu } from '../models/submenu';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  constructor(private menuService:MenuService, private route:ActivatedRoute){}

  restaurant:Restaurant = new Restaurant();
  menu:Menu = new Menu();
  currentPage:number = 1;

  saveMessage:string = "";

  ngOnInit(): void {
    let data = sessionStorage.getItem("restaurant");
    if(data !== null)
      this.restaurant = JSON.parse(data);

    const _id = this.route.snapshot.queryParamMap.get('_id');
    if(_id !== null)
      this.getMenu(_id);
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
