import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { I18nModule, ZambonLibModule } from 'zambon-lib';

import NavigationDrawerStoryComponent from './navigation-drawer.component';


export default {
  title: 'Navigation/Navigation drawer',
  component: NavigationDrawerStoryComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ZambonLibModule,
        RouterModule.forRoot([
            { path: '', component: NavigationDrawerStoryComponent, children: [
                { path: '', component: NavigationDrawerStoryComponent, pathMatch: 'full' },
                { path: 'iframe.html', component: NavigationDrawerStoryComponent },
                { path: '1', component: NavigationDrawerStoryComponent },
                { path: '2', component: NavigationDrawerStoryComponent },
                { path: '3', component: NavigationDrawerStoryComponent },
                { path: '4', component: NavigationDrawerStoryComponent },
                { path: '5', component: NavigationDrawerStoryComponent },
                { path: '6', component: NavigationDrawerStoryComponent }
            ] }
        ]),
        I18nModule.forRoot(['en', 'pt'])
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }),
  ],
} as Meta;

const Template: Story<NavigationDrawerStoryComponent> = (args: NavigationDrawerStoryComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
} as Partial<NavigationDrawerStoryComponent>;
