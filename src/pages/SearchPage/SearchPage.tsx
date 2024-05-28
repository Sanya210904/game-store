import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameCard from '../../components/GameCard/GameCard';
import cls from './SearchPage.module.scss';
import $api from '../../api';
import { Game } from '../../types/Game';
import { Button, Select } from '../../ui';

const SearchPage = () => {
  const { search } = useParams();
  const [gameList, setGameList] = useState<Game[] | null>([]);
  const [totalGames, setTotalGames] = useState(0);

  useEffect(() => {
    getData();
  }, [search]);

  const getData = async () => {
    await $api.get(`games?search_query=${search}&limit=15`).then((data) => {
      console.log(data);
      setGameList(data.data.items);
      setTotalGames(data.data.total);
    });
  };

  console.log(totalGames);

  if (!gameList || gameList.length === 0) {
    return <></>;
  }

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.title}>Search results for "{search}"</h2>
      <div className={cls.block}>
        <div className={cls.gameCardsBlock}>
          {gameList.map((item) => (
            <GameCard
              id={item.game_id}
              title={item.name}
              image={item.header_image}
              date={item.release_date}
              tags={item.genres}
              price={item.price}
            />
          ))}
        </div>
        <div>
          <div className={cls.searchOptions}>
            <span className={cls.blockTitle}>Advanced Search</span>
            <Select
              textLabel="Developer"
              options={[{ value: 'Dev1', label: 'Developer 1' }]}
            />
            <Select
              textLabel="Publisher"
              options={[{ value: 'Dev1', label: 'Developer 1' }]}
            />
            <Select
              textLabel="Genre"
              options={[{ value: 'Dev1', label: 'Developer 1' }]}
            />
            <Select
              textLabel="Language"
              options={[{ value: 'Dev1', label: 'Developer 1' }]}
            />
            <Select
              textLabel="Price"
              options={[{ value: 'Dev1', label: 'Developer 1' }]}
            />
            <Select
              textLabel="Rating"
              options={[{ value: 'Dev1', label: 'Developer 1' }]}
            />
            <Select
              textLabel="System Requirements"
              options={[{ value: 'Dev1', label: 'Developer 1' }]}
            />

            <div className={cls.separator} />

            <div className={cls.buttonBlock}>
              <Button
                buttonStyle="normalPink"
                buttonLabel="Apply Filters"
                onClick={() => undefined}
              />
              <Button
                buttonStyle="normalPink"
                buttonLabel="Reset"
                onClick={() => undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
