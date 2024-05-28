import React from 'react';
import { Button } from '../../ui';
import cls from './HomePage.module.scss';
import Image1 from '../../assets/images/d1.jpg';
import Image2 from '../../assets/images/d2.jpg';
import Image3 from '../../assets/images/d3.jpg';
import Image4 from '../../assets/images/d4.jpg';
import Image5 from '../../assets/images/d5.jpg';
import Image6 from '../../assets/images/d6.jpg';
import Image7 from '../../assets/images/d7.jpg';
import Image8 from '../../assets/images/d8.jpg';
import Image9 from '../../assets/images/d9.jpg';

import C1 from './../../assets/images/c1.png';
import C2 from './../../assets/images/c2.png';
import C3 from './../../assets/images/c3.png';
import C4 from './../../assets/images/c4.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={cls.discount}>
        <div className={cls.discountHeader}>
          <h2 className={cls.disountHeaderTitle}>DISCOUNTS</h2>
          <Button
            buttonStyle="normalPink"
            buttonLabel="more"
            onClick={() => undefined}
          />
        </div>

        <div className={cls.discountBlock}>
          <div
            onClick={() => navigate('/game/612')}
            className={cls.discountCard}
          >
            <img
              src={Image1}
              style={{ width: 300 }}
              className={cls.discountCardImage}
            />
            <div className={cls.discountPriceBlock}>
              {/* <img src="./assets/cart.svg" className={cls.discountPriceCart} /> */}
              <div className={cls.discountPriceInfo}>
                <p className={cls.discountPriceTitle}>-75%</p>
                <p className={cls.discountPriceSubtitle}>$12.50</p>
              </div>
            </div>
          </div>
          <div onClick={() => navigate('/game/6')} className={cls.discountCard}>
            <img
              style={{ width: 300, height: 170 }}
              src={Image2}
              className={cls.discountCardImage}
            />
            <div className={cls.discountPriceBlock}>
              {/* <img src="./assets/cart.svg" className={cls.discountPriceCart} /> */}
              <div className={cls.discountPriceInfo}>
                <p className={cls.discountPriceTitle}>-75%</p>
                <p className={cls.discountPriceSubtitle}>$12.50</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate('/game/2012')}
            className={cls.discountCard}
          >
            <img
              style={{ width: 300, height: 170 }}
              src={Image3}
              className={cls.discountCardImage}
            />
            <div className={cls.discountPriceBlock}>
              {/* <img src="./assets/cart.svg" className={cls.discountPriceCart} /> */}
              <div className={cls.discountPriceInfo}>
                <p className={cls.discountPriceTitle}>-75%</p>
                <p className={cls.discountPriceSubtitle}>$12.50</p>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate('/game/2335')}
            className={cls.discountCard}
          >
            <img
              style={{ width: 300, height: 170 }}
              src={Image4}
              className={cls.discountCardImage}
            />
            <div className={cls.discountPriceBlock}>
              {/* <img src="./assets/cart.svg" className={cls.discountPriceCart} /> */}
              <div className={cls.discountPriceInfo}>
                <p className={cls.discountPriceTitle}>-75%</p>
                <p className={cls.discountPriceSubtitle}>$12.50</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate('/game/589')}
            className={cls.discountCard}
          >
            <img
              style={{ width: 300, height: 170 }}
              src={Image5}
              className={cls.discountCardImage}
            />
            <div className={cls.discountPriceBlock}>
              {/* <img src="./assets/cart.svg" className={cls.discountPriceCart} /> */}
              <div className={cls.discountPriceInfo}>
                <p className={cls.discountPriceTitle}>-75%</p>
                <p className={cls.discountPriceSubtitle}>$12.50</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate('/game/2040')}
            className={cls.discountCard}
          >
            <img
              style={{ width: 300, height: 170 }}
              src={Image6}
              className={cls.discountCardImage}
            />
            <div className={cls.discountPriceBlock}>
              {/* <img src="./assets/cart.svg" className={cls.discountPriceCart} /> */}
              <div className={cls.discountPriceInfo}>
                <p className={cls.discountPriceTitle}>-75%</p>
                <p className={cls.discountPriceSubtitle}>$12.50</p>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate('/game/443')}
            className={cls.discountCard}
          >
            <img
              style={{ width: 300, height: 170 }}
              src={Image7}
              className={cls.discountCardImage}
            />
            <div className={cls.discountPriceBlock}>
              {/* <img src="./assets/cart.svg" className={cls.discountPriceCart} /> */}
              <div className={cls.discountPriceInfo}>
                <p className={cls.discountPriceTitle}>-75%</p>
                <p className={cls.discountPriceSubtitle}>$12.50</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate('/game/812')}
            className={cls.discountCard}
          >
            <img
              style={{ width: 300, height: 170 }}
              src={Image8}
              className={cls.discountCardImage}
            />
            <div className={cls.discountPriceBlock}>
              {/* <img src="./assets/cart.svg" className={cls.discountPriceCart} /> */}
              <div className={cls.discountPriceInfo}>
                <p className={cls.discountPriceTitle}>-75%</p>
                <p className={cls.discountPriceSubtitle}>$12.50</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate('/game/4504')}
            className={cls.discountCard}
          >
            <img
              style={{ width: 300, height: 170 }}
              src={Image9}
              className={cls.discountCardImage}
            />
            <div className={cls.discountPriceBlock}>
              {/* <img src="./assets/cart.svg" className={cls.discountPriceCart} /> */}
              <div className={cls.discountPriceInfo}>
                <p className={cls.discountPriceTitle}>-75%</p>
                <p className={cls.discountPriceSubtitle}>$12.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cls.category}>
        <div className={cls.discountHeader}>
          <h2 className={cls.disountHeaderTitle}>CATEGORIES</h2>
          <Button
            buttonStyle="normalPink"
            buttonLabel="more"
            onClick={() => undefined}
          />
        </div>
        <div className={cls.categoryBlock}>
          <div className={cls.categoryCard}>
            <img className={cls.categoryCardImage} src={C1} />
            <div className={cls.categoryTitleBlock}>
              <h6 className={cls.categorTitle}>racing</h6>
            </div>
          </div>

          <div className={cls.categoryCard}>
            <img className={cls.categoryCardImage} src={C2} />
            <div className={cls.categoryTitleBlock}>
              <h6 className={cls.categorTitle}>horror</h6>
            </div>
          </div>

          <div className={cls.categoryCard}>
            <img className={cls.categoryCardImage} src={C3} />
            <div className={cls.categoryTitleBlock}>
              <h6 className={cls.categorTitle}>adventure</h6>
            </div>
          </div>

          <div className={cls.categoryCard}>
            <img className={cls.categoryCardImage} src={C4} />
            <div className={cls.categoryTitleBlock}>
              <h6 className={cls.categorTitle}>fighting</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
