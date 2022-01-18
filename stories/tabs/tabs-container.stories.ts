import { DragulaModule } from 'ng2-dragula';
import { APP_BASE_HREF } from '@angular/common';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CustomReuseStrategy, I18nModule, ZambonLibModule } from 'zambon-lib';

import TabsContainerStoryComponent from './tabs-container.component';
import HomeComponent from './home/home.component';
import TestComponent from './test/test.component';


export default {
  title: 'Tabs/Tabs container',
  component: TabsContainerStoryComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ZambonLibModule,
        DragulaModule.forRoot(),
        RouterModule.forRoot([
            { path: '', children: [
                { path: '', component: HomeComponent, pathMatch: 'full' },
                { path: 'iframe.html', component: HomeComponent },
                { path: '1', component: TestComponent },
                { path: '2', component: TestComponent },
                { path: '3', component: TestComponent },
                { path: '4', component: TestComponent },
                { path: '5', component: TestComponent },
                { path: '6', component: TestComponent }
            ] }
        ]),
        I18nModule.forRoot(['en', 'pt'])
      ],
      providers: [
          {provide: APP_BASE_HREF, useValue: '/'},
          { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
      ]
    }),
  ],
} as Meta;

const Template: Story<TabsContainerStoryComponent> = (args: TabsContainerStoryComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
} as Partial<TabsContainerStoryComponent>;
