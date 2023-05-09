import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "src/app/services/food-services";
import { Food } from "src/app/shared/models/foods";

@Component({
  selector:'foodPage',
  templateUrl:'./foodPage.component.html',
  styleUrls:['./foodPage.css']
})

export class FoodPageComponent {

  food!:Food;

  constructor(private activatedRoute : ActivatedRoute, private foodService : FoodService) {
    activatedRoute.params.subscribe(params => {
      if(params.id)
      this.food = foodService.getFoodId(params.id);
    })
  }

}
