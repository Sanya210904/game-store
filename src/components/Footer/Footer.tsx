import React from 'react';
import Logo from '../../assets/images/OGS.svg';
import cls from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.footerContainer}>
        <img src={Logo} className={cls.footerLogo} />
        <p className={cls.footerText}>
          © 2024 OGS Corporation. All rights reserved. All trademarks are
          property of their respective owners in Ukraine and other countries.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
