import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const TextClearable: Story = {
  args: {
    placeholder: 'Enter text',
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const PasswordClearable: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    clearable: true,
  },
};

export const NumberExample: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

export const Controlled: Story = {
  render: (args: React.ComponentProps<typeof Input>) => {
    const ControlledExample: React.FC<React.ComponentProps<typeof Input>> = (
      props,
    ) => {
      const [value, setValue] = React.useState('');
      return (
        <div style={{ width: 320 }}>
          <Input
            {...props}
            value={value}
            onChange={(v) => setValue(String(v))}
          />
          <div style={{ marginTop: 8, fontSize: 13, color: '#555' }}>
            Current value: {value}
          </div>
        </div>
      );
    };

    return <ControlledExample {...args} />;
  },
};
