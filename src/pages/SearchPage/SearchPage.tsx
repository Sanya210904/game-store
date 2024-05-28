import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import GameCard from '../../components/GameCard/GameCard';
import cls from './SearchPage.module.scss';
import $api from '../../api';
import { Game } from '../../types/Game';
import { Button, Select } from '../../ui';

const SearchPage = () => {
  const { search } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genres = queryParams.get('genres');

  const [gameList, setGameList] = useState<Game[] | null>([]);
  const [totalGames, setTotalGames] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(genres || '');

   const availableGenres = [
    "Adventure",
    "Casual",
    "Indie",
    "RPG",
    "Action",
    "Racing",
    "Simulation",
    "Sports",
    "Strategy",
    "Free to Play",
    "Utilities",
    "Massively Multiplayer",
    "Early Access",
    "Violent",
    "Gore",
    "Animation & Modeling",
    "Video Production",
    "Design & Illustration",
    "Photo Editing",
    "Audio Production",
    "Software Training",
    "Education",
    "Game Development",
    "Web Publishing",
    "Nudity",
    "Movie",
    "Sexual Content"
  ];

  useEffect(() => {
    getData();
  }, [search, genres]);

  const getData = async () => {
    try {
      setLoading(true);
      const searchQuery = search ? `search_query=${search}` : '';
      const genreQuery = genres ? `&genres=${genres}` : '';
      console.log(`games?${searchQuery}&limit=20${genreQuery}`);
      const response = await $api.get(`games?${searchQuery}&limit=20${genreQuery}`);

      setGameList(response.data.items);
      setTotalGames(response.data.total);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error fetching data:', err.message);
        setError(err.message);
      } else {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  let resultMessage = null;

  if (!gameList || gameList.length === 0) {
    resultMessage = <div>No results found.</div>;
  }

  const handleGenreChange = (selectedGenre: string) => {
    setSelectedGenre(selectedGenre);
    navigate(`/search/${search}${selectedGenre ? `?genres=${selectedGenre}` : ''}`);
  };

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.title}>Search results for "{search}"{genres && ` - Genre: ${genres}`}</h2>
      <h2 className={cls.title}>{totalGames} Results</h2>
      <div className={cls.block}>
        <div className={cls.gameCardsBlock}>
          {gameList?.map((item) => (
            <GameCard
              key={item.game_id}
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
            <Select textLabel="Developer" options={[{ value: 'Dev1', label: 'Developer 1' }]} />
            <Select textLabel="Publisher" options={[{ value: 'Pub1', label: 'Publisher 1' }]} />
            <Select
              textLabel="Select Genre"
              options={availableGenres.map(genre => ({ value: genre, label: genre }))}
              value={selectedGenre}
              onChange={handleGenreChange}
            />
            <Select textLabel="Language" options={[{ value: 'Lang1', label: 'Language 1' }]} />
            <Select textLabel="Price" options={[{ value: '10', label: '10' }]} />
            <Select textLabel="Rating" options={[{ value: '4', label: '4' }]} />
            <Select textLabel="System Requirements" options={[{ value: '-', label: '-' }]} />

            <div className={cls.separator} />

            <div className={cls.buttonBlock}>
              <Button buttonStyle="normalPink" buttonLabel="Apply Filters" onClick={() => undefined} />
              <Button buttonStyle="normalPink" buttonLabel="Reset" onClick={() => undefined} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
