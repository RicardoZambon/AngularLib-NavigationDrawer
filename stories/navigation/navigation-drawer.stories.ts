import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { I18nModule, MyLibModule } from 'zs-lib';

import NavigationDrawerStoryComponent from './navigation-drawer.component';


export default {
  title: 'Navigation/Navigation drawer',
  component: NavigationDrawerStoryComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MyLibModule,
        I18nModule.forRoot(['en', 'pt'])
      ],
    }),
  ],
} as Meta;

const Template: Story<NavigationDrawerStoryComponent> = (args: NavigationDrawerStoryComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
} as Partial<NavigationDrawerStoryComponent>;
