import { TrackScrollDirective } from './track-scroll.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ TrackScrollDirective ],
  imports: [
    CommonModule
  ],
  exports: [
      TrackScrollDirective
  ]
})
export class DirectivesModule { }
