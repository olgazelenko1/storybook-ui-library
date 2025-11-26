import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SidebarMenu from '../components/SidebarMenu/SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { id: '1', label: 'Home' },
  {
    id: '2',
    label: 'Products',
    children: [
      { id: '2-1', label: 'Shoes' },
      { id: '2-2', label: 'Bags' },
    ],
  },
  { id: '3', label: 'About' },
];

export const Open: Story = {
  args: {
    items,
    isOpen: true,
  },
};
