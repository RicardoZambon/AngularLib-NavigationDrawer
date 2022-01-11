import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'storybook-login-input',
  template: `<zambon-lib-login-language-dropdown [themeName]="theme">
  </zambon-lib-login-language-dropdown>`,
  styleUrls: [ './login-language-dropdown-story.component.scss' ]
})
export default class LoginLanguageInputDropdownStoryComponent {
  @Input()
  type: string = 'text';
  
  @Input()
  icon: string = '';
  
  @Input()
  placeholder: string = '';

  @Input()
  theme: 'default' | 'danger' | 'warning' | 'success' = 'default';

  constructor() {
  }
}
