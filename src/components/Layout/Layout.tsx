import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import cls from './Layout.module.scss';
import AuthFeature from '../../feature/AuthFeature/AuthFeature';
import ModalContext from '../../providers/ModalProvider';

const Layout = () => {
  

  return (
    <div className={cls.wrapper}>
      <Header />
      <div className={cls.body}>
        <div className={cls.container}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
