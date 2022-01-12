import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { I18nModule, ZambonLibModule } from 'zambon-lib';

import LoginInputStoryComponent from './login-input-story.component';


export default {
  title: 'Login/Login input',
  component: LoginInputStoryComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ZambonLibModule,
        I18nModule.forRoot(['en', 'pt'])
      ],
    }),
  ],
} as Meta;

const Template: Story<LoginInputStoryComponent> = (args: LoginInputStoryComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {   
    icon: 'user',
    placeholder: 'Type your username'
} as Partial<LoginInputStoryComponent>;
