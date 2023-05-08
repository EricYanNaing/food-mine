import { Component, OnInit } from '@angular/core'
import { FoodService } from 'src/app/services/food-services';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.css']
})

export class HomeComponent implements OnInit {
    foods:String[] = []
    constructor(private foodSerive:FoodService){}

    ngOnInit(): void {
        this.foods = this.foodSerive.getAll();
    }

   

}