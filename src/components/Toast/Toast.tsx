import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';

export type ToastType = 'info' | 'success' | 'error';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  closable?: boolean;
}

const ANIM_MS = 220;

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  closable = false,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(
      () => setVisible(false),
      Math.max(0, duration - ANIM_MS),
    );
    const closeTimer = setTimeout(() => onClose?.(), duration);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose?.(), ANIM_MS);
  };

  const variantClass =
    type === 'success'
      ? styles.success
      : type === 'error'
        ? styles.error
        : styles.info;

  return (
    <div className={styles.viewport}>
      <div
        className={`${styles.toast} ${variantClass} ${
          visible ? styles.show : styles.hide
        }`}
        role="status"
        aria-live="polite"
      >
        <span className={styles.message}>{message}</span>
        {closable && (
          <button
            className={styles.closeButton}
            aria-label="Close toast"
            onClick={handleClose}
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="6"
                y1="18"
                x2="18"
                y2="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;
