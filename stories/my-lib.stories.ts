import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MyLibComponent, MyLibModule } from 'zs-lib';

export default {
  title: 'Example/MyLib',
  component: MyLibComponent,
  decorators: [
    moduleMetadata({
      imports: [MyLibModule],
    }),
  ],
} as Meta;

const Template: Story<MyLibComponent> = (args: MyLibComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<MyLibComponent>;
