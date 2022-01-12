import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { I18nModule, ZambonLibModule } from 'zambon-lib';

import LoginLanguageInputDropdownStoryComponent from './login-language-dropdown-story.component';


export default {
  title: 'Login/Language selection dropdown',
  component: LoginLanguageInputDropdownStoryComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ZambonLibModule,
        I18nModule.forRoot(['en', 'pt'])
      ],
    }),
  ],
} as Meta;

const Template: Story<LoginLanguageInputDropdownStoryComponent> = (args: LoginLanguageInputDropdownStoryComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {   
} as Partial<LoginLanguageInputDropdownStoryComponent>;
