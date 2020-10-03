import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyVaultComponent } from "./my-vault.component";

export const myVaultRoutes: Routes = [
  {
    path: '',
    component: MyVaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(myVaultRoutes)],
  exports: [RouterModule]
})

export class MyVaultModuleRouting {}
