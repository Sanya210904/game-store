import React, { FC } from 'react';
import StarImage from '../../assets/images/Star 2.svg';
import cls from './GameCard.module.scss';
import { Link } from 'react-router-dom';

type GameCardProps = {
  image: string;
  title: string;
  date: string;
  tags: string[];
  price: number;
  id: number;
};

const GameCard: FC<GameCardProps> = (props) => {
  const { image, title, date, tags, price, id } = props;

  return (
    <div className={cls.resultCard}>
      <img className={cls.gameImage} src={image} alt="" />
      <div className={cls.stuff}>
        <div className={cls.nameDateRating}>
          <Link to={`/game/${id}`} className={cls.gameName}>
            {title}
          </Link>
          <div className={cls.dateRating}>
            <div className={cls.date}>{date}</div>
            <div className={cls.rating}>
              <img src={StarImage} className={cls.star} />
              <img src={StarImage} className={cls.star} />
              <img src={StarImage} className={cls.star} />
              <img src={StarImage} className={cls.star} />
            </div>
          </div>
        </div>

        <div className={cls.tagsPrice}>
          <div className={cls.tags}>
            <div className={cls.platformWin}></div>
            <div className={cls.platformMac}></div>
            <div className={cls.tagYellow}>Meets Requirements</div>
            {/* <button className="tag">Top Seller</button> */}
          </div>

          <div className={cls.priceContainer}>
            {/* <div className="old-price">$39.99</div> */}
            <div className="discount-price">
              {/* <div className="discount">-60%</div> */}
              <div className={cls.price}>${price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
