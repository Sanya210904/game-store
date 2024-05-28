import React from 'react';
import CartFeature from '../../feature/CartFeature/CartFeature';
import cls from './CartPage.module.scss'


const CartPage = () => {

  return (
    <div>
      <h2 className={cls.title}>My shopping Cart</h2>
      <CartFeature />
    </div>
  );
};

export default CartPage;
