import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginModuleRouting } from "./login.module.routing";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { CleanInputDirective } from "../../components/directives/clean-input.directive";
import { LoadingSpinnerComponent } from "../../components/loading-spinner/loading-spinner-component";

@NgModule({
  declarations: [LoginComponent, CleanInputDirective, LoadingSpinnerComponent],
  exports: [
    LoginComponent,
    CleanInputDirective
  ],
  imports: [
    CommonModule,
    LoginModuleRouting,
    MatInputModule,
    ReactiveFormsModule,
  ]
})

export class LoginModule { }
