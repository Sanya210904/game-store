export interface Game {
  game_id: number;
  steam_id: number;
  name: string;
  release_date: string;
  price: number;
  dlc_count: number;
  header_image: string;
  windows: boolean;
  linux: boolean;
  mac: boolean;
  short_description: string;
  detailed_description: string;
  website: string;
  metacritic_score: number;
  metacritic_url: string;
  minimum_requirements: string;
  recommended_requirements: string;
  languages: string[];
  developers: string[];
  publishers: string[];
  genres: string[];
  screenshots: string[];
  packages: GamePackage[];
}

type GamePackage = {
  title: string;
  price: number;
  description: string;
}
