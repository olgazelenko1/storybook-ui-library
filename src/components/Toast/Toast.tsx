import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';

export type ToastType = 'info' | 'success' | 'error';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number; // ms
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
    <div className={styles.container} role="status" aria-live="polite">
      <div
        className={`${styles.toast} ${variantClass} ${!visible ? styles.hide : ''}`}
      >
        {message}
      </div>
      {closable && (
        <button
          className={styles.closeButton}
          aria-label="Close toast"
          type="button"
          onClick={handleClose}
        >
          ❌
        </button>
      )}
    </div>
  );
};

export default Toast;
