import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import cls from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={cls.wrapper}>
      <Header />
      <div className={cls.body}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
