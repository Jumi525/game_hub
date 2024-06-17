export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  slug: string;
  rating: number;
  parent_platforms: { platform: Platforms }[];
  background_image: string;
  metacritic: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface FetchRawg<T> {
  count: number;
  results: T[];
}
