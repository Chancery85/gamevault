import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeModuleRouting } from "./home.module.routing";
import { GameItemComponent } from './game-item/game-item.component';
import { GameEditComponent } from './game-item/game-edit/game-edit.component';



@NgModule({
  declarations: [HomeComponent, GameItemComponent, GameEditComponent],
  imports: [
    CommonModule,
    HomeModuleRouting
  ]
})
export class HomeModule { }
