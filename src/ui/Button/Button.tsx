import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  buttonLabel?: string;         // Optional, can be used for setting text on some buttons. Important: use this to set a discount on the homeDiscountBuy button & cart item count on the storeNavbarCart button
  onClick: () => void;
  buttonStyle: 'storeNavbar' | 'storeNavbarCart' | 'gameDetailsMods' | 'homeMore' | 'normalPink' | 'normalGreen' | 'continueShopping' | 'cartPay' | 'homeFeaturedBuy' | 'homeDiscountsBuy' | 'gameDetailsBuy';
  price?: string;         // Optional, can be used to set the price on cartPay, homeFeaturedBuy, homeDiscountBuy, and gameDetailsBuy buttons. Usage: price="$7.99"
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, onClick, buttonStyle, price }) => {
  const className = `${styles[buttonStyle]}`;
  
  if(buttonStyle === 'gameDetailsBuy' || buttonStyle === 'homeFeaturedBuy') {
    return (
      <button className={className} onClick={onClick}>
        <div className={styles.buyButtonContainer}>
          <img className={styles.cartIcon} src={require('../../assets/images/cart.svg').default} alt='Cart' />
          <div className={styles.buyButtonTextContainer}>
            <p>Add to Cart</p>
            {price && <p><span className={styles.price}>{price}</span></p>}
          </div>
        </div>
      </button>
    );
  }
  
  if(buttonStyle === 'homeDiscountsBuy') {
    return (
      <button className={className} onClick={onClick}>
        <div className={styles.buyButtonContainer}>
          <img className={styles.cartIcon} src={require('../../assets/images/cart.svg').default} alt='Cart' />
          <div className={styles.buyButtonTextContainer}>
            {buttonLabel}
            {price && <p><span className={styles.price}>{price}</span></p>}
          </div>
        </div>
      </button>
    );
  }
  
  if(buttonStyle === 'cartPay') {
    return (
      <button className={className} onClick={onClick}>
        <p>Pay
        {price && <span className={styles.pricePay}> {price}</span>} </p>
      </button>
    );
  }
  
  if(buttonStyle === 'storeNavbarCart') {
    return (
      <button className={className} onClick={onClick}>
        <div className={styles.buyButtonContainer}>
          <img className={styles.cartIcon} src={require('../../assets/images/cart.svg').default} alt='Cart' />
          <p>Cart ({buttonLabel})</p>
        </div>
      </button>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {buttonLabel}
    </button>
  );
};

export default Button;


// examples
// <Button buttonLabel="Store Navbar" onClick={handleClick} buttonStyle="storeNavbar" />
// <Button buttonLabel="3" onClick={handleClick} buttonStyle="storeNavbarCart" />
// <Button buttonLabel="Mods" onClick={handleClick} buttonStyle="gameDetailsMods" />
// <Button buttonLabel="More" onClick={handleClick} buttonStyle="homeMore" />
// <Button buttonLabel="Pink Button" onClick={handleClick} buttonStyle="normalPink" />
// <Button buttonLabel="Green Button" onClick={handleClick} buttonStyle="normalGreen" />
// <Button buttonLabel="Continue Shopping" onClick={handleClick} buttonStyle="continueShopping" />
// <Button price="$25.97" onClick={handleClick} buttonStyle="cartPay" />
// <Button price="$7.99" onClick={handleClick} buttonStyle="homeFeaturedBuy" />
// <Button buttonLabel="-20%" price="$7.99" onClick={handleClick} buttonStyle="homeDiscountsBuy" />
// <Button price="$7.99" onClick={handleClick} buttonStyle="gameDetailsBuy" />