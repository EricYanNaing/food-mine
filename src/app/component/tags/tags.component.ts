import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food-services';
import { Food } from 'src/app/shared/models/foods';
import { Tag } from 'src/app/shared/models/tags';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tag.css'],
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.tags = this.foodService.getAllTag();
  }
}
