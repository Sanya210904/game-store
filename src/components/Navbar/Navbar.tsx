import React, { useState } from 'react';
import cls from './Navbar.module.scss';
import { Button, Input } from '../../ui';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { cart, cartItemsAmount } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  console.log(`Cart length: ${cart.length}`);
  console.log(`Cart items amount: ${cartItemsAmount}`);

  const handleSearchButton = () => {
    if (searchQuery.length !== 0) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className={cls.navbar}>
      <div className={cls.navbarContainer}>
        <div className={cls.navbarbuttonBlock}>
          <Button
            buttonStyle="storeNavbar"
            buttonLabel="Categories"
            onClick={() => navigate('/')}
          />
          <Button
            buttonStyle="storeNavbar"
            buttonLabel="New"
            onClick={() => navigate('/')}
          />
          <Button
            buttonStyle="storeNavbar"
            buttonLabel="Discounts"
            onClick={() => navigate('/')}
          />
          <Button
            buttonStyle="storeNavbar"
            buttonLabel="Games I Can Run"
            onClick={() => navigate('/')}
          />
        </div>

        <div className={cls.navBarSearchBlock}>
          <Button
            buttonLabel={cart.length === 0 ? 'X' : cartItemsAmount.toString()}
            buttonStyle="storeNavbarCart"
            onClick={() => {
              navigate('/cart');
            }}
          />
          <Input
            onChange={(value) => setSearchQuery(value)}
            type="search"
            onSearch={handleSearchButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
