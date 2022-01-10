import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'storybook-login-input',
  template: `<zslib-login-input
    [formGroup]="form"
    [controlName]="'component'"
    [type]="type"
    [icon]="icon"
    [placeholder]="placeholder"
    [themeName]="theme"
    [isInvalid]="form.controls['component'].invalid && (form.controls['component'].dirty || form.controls['component'].touched)"
  >
    <div validations>
      <div [class.d-none]="!form.controls['component'].errors?.required">This field is required</div>
    </div>
  </zslib-login-input>`,
  styleUrls: [ './login-input-story.component.scss' ]
})
export default class LoginInputStoryComponent {
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
