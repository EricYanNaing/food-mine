import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food-services';
import { Food } from 'src/app/shared/models/foods';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodSerive: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodSerive.getAllFoodsBySearchTerm(params.searchTerm)
      else if (params.tag)
        this.foods = this.foodSerive.getAllFoodsByTag(params.tag);
      else this.foods = this.foodSerive.getAll();
    });
  }
}
