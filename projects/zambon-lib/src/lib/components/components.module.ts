import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { NavigationModule } from './navigation/navigation.module';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginModule,
    NavigationModule,
    TabsModule
  ],
  exports: [
      LoginModule,
      NavigationModule,
      TabsModule
  ]
})
export class ComponentsModule { }