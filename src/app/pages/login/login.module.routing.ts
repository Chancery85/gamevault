import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from "./login.component";

export const loginRoute: Routes = [
  {
    path: '',
    component:  LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoute)],
  exports: [RouterModule]
})
export class LoginModuleRouting { }
