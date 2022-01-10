import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'storybook-login-input',
  template: `<zslib-login-language-dropdown [themeName]="theme">
  </zslib-login-language-dropdown>`,
  styleUrls: [ './login-language-dropdown-story.component.scss' ]
})
export default class LoginLanguageInputDropdownStoryComponent {
  form!: FormGroup;
  
  @Input()
  type: string = 'text';
  
  @Input()
  icon: string = '';
  
  @Input()
  placeholder: string = '';

  @Input()
  theme: 'default' | 'danger' | 'warning' | 'success' = 'default';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      component: ['', Validators.required]
  });
  }
}
