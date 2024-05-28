import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type: 'search' | 'username' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  title?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
}

const Input: React.FC<InputProps> = ({
  onChange,
  type,
  placeholder,
  value,
  title,
  onSearch,
}) => {
  if (type === 'search') {
    return (
      <div className={styles.searchContainer}>
        <input
          //@ts-ignore
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="search store"
          className={styles.searchInput}
          value={value}
        />
        <div onClick={onSearch} className={styles.searchInputBlock}>
          <span className={styles.searchDivider}></span>
          <img
            src={require('../../assets/images/search.svg').default}
            alt="Search"
            className={styles.searchIcon}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.inputBlock}>
      {title && <h4 className={styles.inputTitle}>{title}</h4>}
      <input
        //@ts-ignore
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        className={styles.formInput}
        value={value}
      />
    </div>
  );
};

export default Input;

// examples
{
  /* <Input type="search"/>
<Input type="username"
    placeholder="username"/>
 <Input type="password"
  placeholder="password"/> */
}
