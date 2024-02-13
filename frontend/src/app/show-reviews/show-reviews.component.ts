import { Component, Input } from '@angular/core';
import { Review } from '../models/review';

@Component({
  selector: 'app-show-reviews',
  templateUrl: './show-reviews.component.html',
  styleUrls: ['./show-reviews.component.css']
})
export class ShowReviewsComponent {
  @Input() reviews:Review[] = []
}
