import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FoodService } from './services/food-services';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [FoodService],
  bootstrap: [AppComponent],
})
export class AppModule {}
