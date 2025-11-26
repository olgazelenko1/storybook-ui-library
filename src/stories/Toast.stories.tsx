import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Toast from '../components/Toast';
import styles from '../components/Toast/Toast.module.css';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: (args) => (
    <div className={styles.viewport}>
      <Toast {...args} />
    </div>
  ),
  args: {
    message: 'This is an info toast',
    type: 'info',
    duration: 4000,
  },
};

export const Success: Story = {
  render: (args) => (
    <div className={styles.viewport}>
      <Toast {...args} />
    </div>
  ),
  args: {
    message: 'Saved successfully',
    type: 'success',
    duration: 3000,
  },
};

export const ErrorManualClose: Story = {
  render: (args) => (
    <div className={styles.viewport}>
      <Toast {...args} />
    </div>
  ),
  args: {
    message: 'An error occurred',
    type: 'error',
    duration: 6000,
    closable: true,
  },
};
