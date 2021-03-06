export interface Game {
  id: number;
  name: string;
  genre: string;
  rating: number;
  imgPath: string;
  description: string;
  favorite?: boolean;
}
