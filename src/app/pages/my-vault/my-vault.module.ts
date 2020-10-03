import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyVaultComponent } from './my-vault.component';
import { MyVaultModuleRouting } from "./my-vault.module.routing";



@NgModule({
  declarations: [MyVaultComponent],
  imports: [
    CommonModule,
    MyVaultModuleRouting
  ]
})
export class MyVaultModule { }
