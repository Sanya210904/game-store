import React from 'react';
import CartCheckout from './ui/CartCheckout/CartCheckout';
import { useAppSelector } from '../../hooks/useAppSelector';
import cls from './CartFeature.module.scss';
import CartItem from './ui/CartItem/CartItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeFromCart } from './store/cartSlice';

const CartFeature = () => {
  const { cart, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={cls.cart}>
      <div className={cls.cartItemsBlock}>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <CartItem
              onRemove={handleRemoveFromCart}
              id={item.game_id}
              image={item.header_image}
              title={item.name}
              rating={4}
              price={item.price}
              screenshot={item.screenshots[0]}
            />
          ))
        )}
      </div>
      <CartCheckout
        cartItemsAmount={cart.length}
        discounts={0}
        initialPrice={totalPrice}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default CartFeature;
