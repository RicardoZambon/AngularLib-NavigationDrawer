import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from '../../directives/directives.module';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';


@NgModule({
  declarations: [
      NavigationDrawerComponent,
      NavigationItemComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    NavigationDrawerComponent,
    NavigationItemComponent
  ]
})
export class NavigationModule { }
