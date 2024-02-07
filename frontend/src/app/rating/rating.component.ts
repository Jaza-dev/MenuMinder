import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating:number = 0.0;
  fullStar:number = 0;
  halfStar:number = 0;
  emptyStar:number = 0;

  ngOnInit(): void {
    if(this.rating!==undefined){
      this.fullStar = Math.floor(this.rating);
      this.halfStar = Math.ceil(this.rating - this.fullStar)
      this.emptyStar = 5 - Math.ceil(this.rating);
    }
  }

  getRange(count: number): number[] {
    return Array(count).fill(0).map((x, i) => i);
  }


}

