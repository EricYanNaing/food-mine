import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FoodService } from './services/food-services';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './component/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './component/tags/tags.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchComponent, TagsComponent],
  imports: [BrowserModule, AppRoutingModule, RatingModule, FormsModule],
  providers: [FoodService],
  bootstrap: [AppComponent],
})
export class AppModule {}
