import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { MenuService } from '../services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute){}

  restaurant:Restaurant = new Restaurant();
  menuId:string = "";

  ngOnInit(): void {
    let data = sessionStorage.getItem("restaurant");
    if(data !== null)
      this.restaurant = JSON.parse(data);

    const _id = this.route.snapshot.queryParamMap.get('_id');
    if(_id !== null)
      this.menuId = _id;
  }
}
