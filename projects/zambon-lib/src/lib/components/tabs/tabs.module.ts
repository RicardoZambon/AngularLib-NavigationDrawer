import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nModule } from './../../i18n/i18n.module';

import { TabContainerComponent } from './tab-container/tab-container.component';
import { CloseTabModalComponent } from './close-tab-modal/close-tab-modal.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { DragulaModule } from 'ng2-dragula';


@NgModule({
  declarations: [
    CloseTabModalComponent,
    TabContainerComponent,
    TabItemComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    DragulaModule.forRoot()
  ],
  exports: [
    CloseTabModalComponent,
    TabContainerComponent,
    TabItemComponent
  ]
})
export class TabsModule { }