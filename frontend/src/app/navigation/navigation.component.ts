import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private router:Router) {}

  @Input() restaurant:Restaurant = new Restaurant();

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
