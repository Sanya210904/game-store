import React from 'react'
import styles from './Select.module.scss';

interface SelectProps {
  textLabel: string;
  options: { value: string, label: string }[];
  selectedOption?: string;
}

const Select: React.FC<SelectProps> = ({ textLabel, options }) => {
  return (
    <div className={styles.customCombobox}>
      <div className={styles.inputContainer}>
        <span className={styles.inputText}>{textLabel}</span>
        <select className={styles.selectBox}>
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

// example
// const options = [
//  { value: 'option1', label: 'Option 1' },
//  { value: 'option2', label: 'Option 2' },
//  { value: 'option3', label: 'Option 3' },
// ];
// <Select textLabel='Test'
// options={options}/>