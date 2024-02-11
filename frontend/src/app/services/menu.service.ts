import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  uri:string = 'http://localhost:4000/menu';

  createMenu(menu:Menu){

    const data = {
      menu:menu
    }

    return this.http.post<Menu>(`${this.uri}/createMenu`, data);
    
  }

  getAllMenus(){
    return this.http.get<Menu[]>(`${this.uri}/getAllMenus`);
  }

  getMenu(_id:string){
    const data = {
      _id:_id
    }
    return this.http.post<Menu>(`${this.uri}/getMenu`, data);
  }

  addPage(_id:string ,newPage:number){
    const data = {
      _id:_id
    }
    return this.http.post<Menu>(`${this.uri}/addPage`, data);
  }

  saveMenu(menu:Menu){
    const data = {
      menu:menu
    }

    return this.http.post<String>(`${this.uri}/saveMenu`, data);
  }

  deleteMenu(_id:string){
    
    const data = {
      _id:_id
    }

    return this.http.post<String>(`${this.uri}/deleteMenu`, data)
  }

  getRestaurantMenus(restaurantId:string){
    const data = {
      restaurantId:restaurantId
    }

    return this.http.post<String>(`${this.uri}/getRestaurantMenus`, data)
  }
}
