import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import SidebarMenu, { MenuItem } from '../components/SidebarMenu/SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const items: MenuItem[] = [
  { id: '1', label: 'Home' },
  { id: '2', label: 'Profile' },
  {
    id: '3',
    label: 'Settings',
    children: [
      { id: '3-1', label: 'General' },
      { id: '3-2', label: 'Account' },
    ],
  },
];

export const Open: Story = {
  render: () => {
    const Wrapper: React.FC = () => {
      const [open, setOpen] = useState(true);
      return (
        <div style={{ height: 600 }}>
          <SidebarMenu
            items={items}
            isOpen={open}
            onClose={() => setOpen(false)}
          />
        </div>
      );
    };
    return <Wrapper />;
  },
};

export const Closed: Story = {
  render: () => {
    const Wrapper: React.FC = () => {
      const [open, setOpen] = useState(false);
      return (
        <div style={{ height: 600 }}>
          <SidebarMenu
            items={items}
            isOpen={open}
            onClose={() => setOpen(false)}
          />
        </div>
      );
    };
    return <Wrapper />;
  },
};
