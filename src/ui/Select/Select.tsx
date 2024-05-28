import React from 'react'
import styles from './Select.module.scss';

interface SelectProps {
  textLabel: string;
  options: { value: string; label: string }[];
  value?: string | null; // Change type to string | null
  onChange?: (selectedValue: string) => void;
}

const Select: React.FC<SelectProps> = ({ textLabel, options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  const sanitizedValue = value === null ? undefined : value; // Convert null to undefined

  return (
    <div className={styles.customCombobox}>
      <div className={styles.inputContainer}>
        <span className={styles.inputText}>{textLabel}</span>
        <select className={styles.selectBox} value={sanitizedValue || ''} onChange={handleChange}> {/* Use sanitizedValue */}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={styles.separator2}>|</span>
        <span className={styles.dropdownIndicator}>&#9662;</span>
      </div>
    </div>
  );
};

export default Select;




