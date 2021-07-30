import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeModuleRouting } from "./home.module.routing";
import { GameItemComponent } from './game-item/game-item.component';
import { GameEditComponent } from './game-item/game-edit/game-edit.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [HomeComponent, GameItemComponent, GameEditComponent],
  imports: [
    CommonModule,
    HomeModuleRouting,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class HomeModule { }
