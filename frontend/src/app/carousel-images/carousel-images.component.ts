import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-images',
  templateUrl: './carousel-images.component.html',
  styleUrls: ['./carousel-images.component.css'],
})
export class CarouselImagesComponent {
  @Input() images:string[]= [];
}
