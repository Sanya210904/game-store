import React, { FC } from 'react';
import cls from './CartItem.module.scss';
import StarImage from '../../../../assets/images/Star 2.svg';
import CloseIcon from '../../../../assets/images/close.svg';
import { Link } from 'react-router-dom';

type CartItemProps = {
  image: string;
  title: string;
  rating: number;
  discountPercentage?: number;
  discountPrice?: number;
  price: number;
  screenshot: string;
  onRemove: (id: number) => void;
  id: number;
};

const CartItem: FC<CartItemProps> = (props) => {
  const {
    image,
    title,
    rating,
    discountPercentage,
    discountPrice,
    price,
    screenshot,
    onRemove,
    id,
  } = props;

  return (
    <div className={cls.cartGame}>
      <img
        onClick={() => onRemove(id)}
        src={CloseIcon}
        className={cls.closeIcon}
      />
      <div className={cls.cartGameBlock}>
        <img className={cls.gameImage} src={image} />
      </div>
      <div className={cls.gameInfoBlock}>
        <div className={cls.gameHeader}>
          <Link to={`/game/${id}`} className={cls.gameHeaderTitle}>
            {title}
          </Link>

          <div className={cls.gameRatingBlock}>
            {Array.from({ length: rating }, (num) => (
              <img className={cls.ratingBlockImage} src={StarImage} />
            ))}
          </div>
        </div>
        <div className={cls.gameFooter}>
          {discountPrice ? (
            <div className={cls.gameFooterBlock}>
              <p className={cls.gameFooterPercentage}>-{discountPercentage}%</p>
              <div className={cls.gameFooterPrice}>
                <p className={cls.gameOldPrice}>${price}</p>
                <p className={cls.gameNewPrice}>${discountPrice}</p>
              </div>
            </div>
          ) : (
            <div className={cls.gameFooterBlock}>
              <p className={cls.gameNewPrice}>${price}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
