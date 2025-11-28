import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Toast from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

const ToastWrapper = (args: React.ComponentProps<typeof Toast>) => (
  <div
    style={{
      position: 'fixed',
      bottom: 16,
      right: 16,
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: 8,
      zIndex: 9999,
    }}
  >
    <Toast {...args} />
  </div>
);

export const Info: Story = {
  render: (args) => <ToastWrapper {...args} />,
  args: { message: 'This is an info toast', type: 'info', duration: 4000 },
};
export const Success: Story = {
  render: (args) => <ToastWrapper {...args} />,
  args: { message: 'Saved successfully', type: 'success', duration: 3000 },
};
export const ErrorManualClose: Story = {
  render: (args) => <ToastWrapper {...args} />,
  args: {
    message: 'An error occurred',
    type: 'error',
    duration: 6000,
    closable: true,
  },
};
