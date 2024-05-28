import React, { useEffect } from 'react';
import CartCheckout from './ui/CartCheckout/CartCheckout';
import { useAppSelector } from '../../hooks/useAppSelector';
import cls from './CartFeature.module.scss';
import CartItem from './ui/CartItem/CartItem';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import $api from '../../api';
import {
  handleCreateOrder,
  handleGetCart,
  handleRemoveFromCart,
} from './store/cartSlice';

const CartFeature = () => {
  const { cart, loading } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((price, game) => {
      return price + game.game.price;
    }, 0);

    return Number(totalPrice.toFixed(2));
  };

  const removeFromCart = (id: number) => {
    dispatch(handleRemoveFromCart(id));
  };

  const getData = async () => {
    dispatch(handleGetCart(null));
  };

  const createOrder = () => {
    dispatch(handleCreateOrder());
  };

  console.log(cart);

  if (!cart || cart.length === 0) {
    return <></>;
  }

  return (
    <div className={cls.cart}>
      <div className={cls.cartItemsBlock}>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : cart !== null ? (
          cart.map((item) => (
            <CartItem
              onRemove={removeFromCart}
              id={item?.game?.game_id}
              image={item?.game?.header_image}
              title={item?.game?.name}
              rating={4}
              price={item?.game?.price}
              screenshot={
                item?.game?.screenshots ? item?.game?.screenshots[0] : ''
              }
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <CartCheckout
        onSubmit={createOrder}
        cartItemsAmount={cart.length}
        discounts={0}
        initialPrice={getTotalPrice()}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default CartFeature;
