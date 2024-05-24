import React from 'react';
import cls from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className={cls.navbarContainer}>
        <div className={cls.navbarbuttonBlock}>
          <button className={cls.navbar__button}>Categories</button>
          <button className={cls.navbar__button}>New</button>
          <button className={cls.navbar__button}>Discounts</button>
          <button className={cls.navbar__button}>Games I can run</button>
        </div>

        <div className="navbar__searchBlock">
          <button className="navbar__cart-button">
            <div className="navbar__button-container">
              <img src="../assets/cart.svg" />
              <p>Cart (x)</p>
            </div>
          </button>
          <div className="input__container">
            <input placeholder="search" className="navbar__input" />
            <div className="input__block">
              <span className="input__divider"></span>
              <img
                src="../assets/Search Icon.svg"
                className="input__searchIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
