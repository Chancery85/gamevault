import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeModuleRouting } from "./home.module.routing";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeModuleRouting
  ]
})
export class HomeModule { }
