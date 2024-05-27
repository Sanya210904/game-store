import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type: 'search' | 'username' | 'password';
  placeholder?: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value }) => {
  
  if (type === 'search') {
    return (
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder='search store'
          className={styles.searchInput}
          value={value}
        />
        <div className={styles.searchInputBlock}>
          <span className={styles.searchDivider}></span>
          <img src={require('../../assets/images/search.svg').default} alt="Search" className={styles.searchIcon} />
        </div>
      </div>
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.formInput}
      value={value}
    />
  );
};

export default Input;


// examples
{/* <Input type="search"/>
<Input type="username"
    placeholder="username"/>
 <Input type="password"
  placeholder="password"/> */}