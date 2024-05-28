import React, { useEffect, useState } from 'react';
import cls from './DashboardPage.module.scss';
import { Button } from '../../ui';
import CheckIcon from '../../assets/images/Check.png';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import $api from '../../api';
import { GameDashboard } from '../../types/GameDashboard';
import { GameStats } from '../../types/GameStats';

const DashboardPage = () => {
  const { role } = useAppSelector((state) => state.user);
  const [gameData, setGameData] = useState<GameDashboard | null>(null);
  const [gameStats, setGameStats] = useState<GameStats | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await $api
      .get('sales/most-sold-game')
      .then((data) => setGameData(data.data));

    await $api.get('sales/stats').then((data) => setGameStats(data.data));
  };

  console.log(gameStats);

  return (
    <div className={cls.content}>
      <div className={cls.content2}>
        <section className={cls.main}>
          <span className={cls.mainTitle}>Best Selling Game</span>
          <div className={cls.separatorPink}></div>
          <div className={cls.bestSeller}>
            <img src={gameData?.game.header_image} alt="" />
            <div className={cls.stuff}>
              <div className={cls.nameDateRating}>
                <span className={cls.gameName}>{gameData?.game.name}</span>
                <div className={cls.dateRating}>
                  {/* <div className={cls.date}>{gameData?.game.release_date}</div> */}
                  <div className={cls.rating}>
                    <div className={cls.star}></div>
                    <div className={cls.star}></div>
                    <div className={cls.star}></div>
                    <div className={cls.star}></div>
                  </div>
                </div>
              </div>

              <div className={cls.tagsPrice}>
                <div className={cls.tags}>
                  <span className={cls.copiesSold}>
                    <em>{gameData?.total_quantity_sold}</em> Copies sold
                  </span>
                  <span className={cls.revenue}>
                    <em>{gameData?.total_price_game}</em> Revenue
                  </span>
                </div>

                <div className={cls.priceContainer}>
                  {/* <div className={cls.oldPrice}>$29.99</div> */}
                  <div className={cls.discountPrice}>
                    {/* <div className={cls.discount}>-33%</div> */}
                    <div className={cls.price}>${gameData?.game.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className={cls.mainTitle}>Quick Actions</span>
          <div className={cls.separatorPink}></div>
          <div className={cls.resultControl}>
            <Button
              buttonStyle="normalPink"
              buttonLabel="add a new game"
              onClick={() => undefined}
            />
            <Button
              buttonStyle="normalPink"
              buttonLabel="create a promotion"
              onClick={() => undefined}
            />
            <Button
              buttonStyle="normalPink"
              buttonLabel="manage users"
              onClick={() => undefined}
            />
          </div>
        </section>

        <section className={cls.systemStatus}>
          <div className={cls.statusContainer}>
            <div className={cls.statusHeader}>
              <div className={cls.statusTitle}>System Status</div>
              <div className={cls.statusValue}>No Faults</div>
            </div>
            <div className={cls.separator}></div>
            <div className={cls.serviceStatus}>
              <div className={cls.statusIcon}>
                <img src={CheckIcon} alt="" />
              </div>
              <div className={cls.serviceName}>Website</div>
            </div>
            <div className={cls.serviceStatus}>
              <div className={cls.statusIcon}>
                <img src={CheckIcon} alt="" />
              </div>
              <div className={cls.serviceName}>Game Server</div>
            </div>
          </div>

          <div className={cls.visitsContainer}>
            <div className={cls.visitsHeader}>
              <div className={cls.visitsTitle}>Sales today</div>
              <div className={cls.visitsTimeframe}>Last 24h</div>
            </div>
            <div className={cls.separator}></div>
            {/* <div className={cls.visitsCount}>10,480</div> */}
            <div className={cls.visitsBreakdown}>
              <div className={cls.signupCount}>
                <div className={cls.count}>{gameStats?.total_sales}</div>
                <div className={cls.label}>Total sales</div>
              </div>
              <div className={cls.guestCount}>
                <div className={cls.count}>{gameStats?.total_quantity}</div>
                <div className={cls.label}>Total quantity</div>
              </div>
              <div className={cls.registeredCount}>
                <div className={cls.count}>{gameStats?.total_transactions}</div>
                <div className={cls.label}>Total transactions</div>
              </div>
            </div>
          </div>

          {/* <div className={cls.downloadsContainer}>
            <div className={cls.downloadsHeader}>
              <div className={cls.downloadsTitle}>Downloads Today</div>
              <div className={cls.downloadsTimeframe}>Last 24h</div>
            </div>
            <div className={cls.separator}></div>
            <div className={cls.downloadsCount}>10,480</div>
            <div className={cls.downloadsBreakdown}>
              <div className={cls.purchaseCount}>
                <div className={cls.count}>3,209</div>
                <div className={cls.label}>Purchases</div>
              </div>
              <div className={cls.redownloadCount}>
                <div className={cls.count}>7,271</div>
                <div className={cls.label}>Redownloads</div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
