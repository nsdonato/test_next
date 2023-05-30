export interface Character {
  name: Identification;
  images: Images;
  gender: string;
  species: string;
  homePlanet: string;
  occupation: string;
  sayings: string[];
  id: number;
  age: string;
}

export interface Images {
  "head-shot": string;
  main: string;
}

export interface Identification {
  first: string;
  middle: string;
  last: string;
}
