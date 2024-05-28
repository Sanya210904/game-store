import React, { FC } from 'react';
import cls from './CartCheckout.module.scss';
import { Button } from '../../../../ui';

type CartCheckoutProps = {
  cartItemsAmount: number;
  initialPrice: number;
  discounts: number;
  totalPrice: number;
  onSubmit: () => void;
};

const CartCheckout: FC<CartCheckoutProps> = (props) => {
  const { cartItemsAmount, initialPrice, discounts, totalPrice, onSubmit } =
    props;

  return (
    <div className={cls.cartInfoBlock}>
      <div className={cls.cartInfoRow}>
        <h5 className={cls.cartInfoTitle}>Items:</h5>
        <p className={cls.cartInfoText}>{cartItemsAmount}</p>
      </div>

      <div className={cls.cartInfoRow}>
        <h5 className={cls.cartInfoTitle}>Total:</h5>
        <p className={cls.cartInfoText}>${initialPrice}</p>
      </div>

      <div className={cls.cartInfoRow}>
        <h5 className={cls.cartInfoTitle}>Discounts:</h5>
        <p className={cls.cartInfoText}>${discounts}</p>
      </div>

      <div className={cls.cartInfoRow}>
        <h5 className={cls.cartInfoTitle}>Payment Method:</h5>
        <p className={cls.cartInfoText}>MasterCard 3939</p>
      </div>

      <div className={cls.cartInfoRow}>
        <h5 className={cls.cartInfoTitle}>Card Holder:</h5>
        <p className={cls.cartInfoText}>John Doe</p>
      </div>

      <div className={cls.cartInfoDivider}></div>

      <div className={cls.cartInfoRow}>
        <h5 className={cls.cartInfoTitle}>Grand Total:</h5>
        <p className={cls.cartInfoText}>${totalPrice}</p>
      </div>

      <Button onClick={onSubmit} buttonStyle="cartPay" />
    </div>
  );
};

export default CartCheckout;
