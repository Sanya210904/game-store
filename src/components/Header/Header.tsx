import React, { FC, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Header.module.scss';
import Logo from '../../assets/images/OGS.svg';
import ModalContext from '../../providers/ModalProvider';
import AuthFeature from '../../feature/AuthFeature/AuthFeature';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logout } from '../../feature/AuthFeature/store/userSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  //@ts-ignore
  const { handleOpenModal } = useContext(ModalContext);
  const { isAuth, role } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAuthOpen = (type: 'register' | 'login') => {
    handleOpenModal(type);
  };

  const handleLogoutButton = () => {
    dispatch(logout());
  };

  console.log(isAuth);

  return (
    <header className={cls.header}>
      <nav className={cls.header__nav}>
        <div className={cls.nav__container}>
          <div className={cls.nav__block}>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
              className={cls.nav__logo}
              src={Logo}
            />
            <ul className={cls.nav__list}>
              <li className={cls.nav__list_item}>
                <NavLink to="/" className={cls.nav__list_link}>
                  Store
                </NavLink>
              </li>
              <li className={cls.nav__list_item}>
                <NavLink to="/" className={cls.nav__list_link}>
                  Mods
                </NavLink>
              </li>
              <li className={cls.nav__list_item}>
                <NavLink to="/" className={cls.nav__list_link}>
                  About
                </NavLink>
              </li>
              <li className={cls.nav__list_item}>
                <NavLink to="/" className={cls.nav__list_link}>
                  Support
                </NavLink>
              </li>
              {role === 'admin' && (
                <li className={cls.nav__list_item}>
                  <NavLink to="/dashboard" className={cls.nav__list_link}>
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          {!isAuth ? (
            <div className={cls.navAuth}>
              <a
                onClick={() => handleAuthOpen('login')}
                className={cls.navAuthLink}
              >
                sign in
              </a>
              <span className={cls.navAuthDivider}></span>
              <a
                onClick={() => handleAuthOpen('register')}
                className={cls.navAuthLink}
              >
                sign up
              </a>
            </div>
          ) : (
            <div className={cls.navAuth}>
              <a onClick={handleLogoutButton} className={cls.navAuthLink}>
                logout
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
