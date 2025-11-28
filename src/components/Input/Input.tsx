import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  clearable?: boolean;
  className?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  clearable = false,
  placeholder = '',
  className = '',
  disabled = false,
}) => {
  const [inputValue, setInputValue] = React.useState(
    value != null ? String(value) : '',
  );
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    setInputValue(value != null ? String(value) : '');
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    if (type === 'number') {
      onChange?.(val === '' ? '' : Number(val));
    } else {
      onChange?.(val);
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const clearInput = () => {
    setInputValue('');
    onChange?.('');
  };

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <input
        className={styles.input}
        type={type === 'password' && showPassword ? 'text' : type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        aria-label={placeholder || 'input'}
      />

      {type === 'password' && (
        <button
          type="button"
          className={`${styles.iconButton} ${styles.toggleButton}`}
          onClick={togglePassword}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 5c-7 0-12 7-12 7s5 7 12 7 12-7 12-7-5-7-12-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
              />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 5c-7 0-12 7-12 7s5 7 12 7 12-7 12-7-5-7-12-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
              />
            </svg>
          )}
        </button>
      )}

      {clearable && inputValue && (
        <button
          type="button"
          className={`${styles.iconButton} ${styles.clearButton}`}
          onClick={clearInput}
          aria-label="Clear input"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M18 6L6 18M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Input;
