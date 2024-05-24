import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Header.module.scss';
import Logo from '../../assets/images/OGS.svg';

const Header = () => {
  return (
    <header className={cls.header}>
      <nav className={cls.header__nav}>
        <div className={cls.nav__container}>
          <div className={cls.nav__block}>
            <img className={cls.nav__logo} src={Logo} />
            <ul className={cls.nav__list}>
              <li className={cls.nav__list_item}>
                <NavLink to="/" className={cls.nav__list_link}>
                  Store
                </NavLink>
              </li>
              <li className="nav__list_item">
                <NavLink to="/" className={cls.nav__list_link}>
                  Mods
                </NavLink>
              </li>
              <li className="nav__list_item">
                <NavLink to="/" className={cls.nav__list_link}>
                  About
                </NavLink>
              </li>
              <li className="nav__list_item">
                <NavLink to="/" className={cls.nav__list_link}>
                  Support
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <div className="nav__auth">
            <a className="nav__auth_link">sign in</a>
            <span className="nav__auth_divider"></span>
            <a className="nav__auth_link">sign up</a>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
