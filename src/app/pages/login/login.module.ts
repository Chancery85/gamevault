import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginModuleRouting } from "./login.module.routing";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginModuleRouting,
    MatInputModule,
  ]
})

export class LoginModule { }
