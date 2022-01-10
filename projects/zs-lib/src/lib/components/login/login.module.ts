import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginInputComponent } from './login-input/login-input.component';
import { LoginLanguageDropdownComponent } from './login-language-dropdown/login-language-dropdown.component';


@NgModule({
  declarations: [
    LoginInputComponent,
    LoginLanguageDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    LoginInputComponent,
    LoginLanguageDropdownComponent
  ]
})
export class LoginModule { }