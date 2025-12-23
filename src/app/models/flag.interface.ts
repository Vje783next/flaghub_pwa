export interface FlagInterface {
  name: {
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  cca3: string;
  capital: string[];
  region: string;
  population: number;
  languages: { [key: string]: string };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}
