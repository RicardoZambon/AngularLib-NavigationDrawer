import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { I18nModule } from './i18n/i18n.module';


@NgModule({
  declarations: [
  ],
  imports: [
      CommonModule,
      I18nModule,
      ComponentsModule,
  ],
  exports: [
    I18nModule,
    ComponentsModule
  ]
})
export class ZambonLibModule { }