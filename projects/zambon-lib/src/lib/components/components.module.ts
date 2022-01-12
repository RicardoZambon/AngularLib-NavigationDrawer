import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { NavigationModule } from './navigation/navigation.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    NavigationModule
  ],
  exports: [
      LoginModule,
      NavigationModule
  ]
})
export class ComponentsModule { }