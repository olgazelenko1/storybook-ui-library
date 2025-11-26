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

export const Input: React.FC<InputProps> = (props) => {
  const [inputValue, setInputValue] = React.useState(
    props.value != null ? String(props.value) : '',
  );
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    setInputValue(props.value != null ? String(props.value) : '');
  }, [props.value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (props.type === 'number') {
      const number = newValue === '' ? '' : Number(newValue);
      props.onChange?.(newValue === '' ? '' : number);
    } else {
      props.onChange?.(newValue);
    }
  };
  const togglePassword = () => setShowPassword((s) => !s);

  return (
    <div className={`${styles.inputWrapper} ${props.className || ''}`}>
      <input
        className={styles.input}
        type={
          props.type === 'password' && showPassword
            ? 'text'
            : props.type || 'text'
        }
        placeholder={props.placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={props.disabled}
        aria-label={props.placeholder || 'input'}
      />
      {props.type === 'password' && (
        <button
          type="button"
          className={`${styles.iconButton} ${styles.toggleButton}`}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          onClick={togglePassword}
        >
          {showPassword ? '👁️' : '🔒'}
        </button>
      )}
      {props.clearable && inputValue && (
        <button
          type="button"
          className={`${styles.iconButton} ${styles.clearButton}`}
          aria-label="Clear input"
          onClick={() => {
            setInputValue('');
            props.onChange?.('');
          }}
        >
          Ｘ
        </button>
      )}
    </div>
  );
};
export default Input;
