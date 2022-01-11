import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from './../../directives/directives.module';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';


@NgModule({
  declarations: [
      NavigationDrawerComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    NavigationDrawerComponent
  ]
})
export class NavigationModule { }
