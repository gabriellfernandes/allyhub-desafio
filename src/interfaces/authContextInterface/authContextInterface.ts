import { ReactNode } from "react";

export interface AuthContextInterface {
  loading: boolean;
  filtredCountry: FiltredValuesInterface[];
  filtredCity:  FiltredValuesInterface[];
  handleSubmitFunction: (data: DataValueInterface) => DataValueInterface
}

export interface AuthContextComponentInterface {
  children: ReactNode;
}

export interface CountryResultsInterface {
  code: string;
  name_ptbr: string;
  name: string;
  country_code?: string;
  group?: string;
}

export interface CityResultsInterFace extends CountryResultsInterface {
  id: number;
  created_at: string;
  country_code: string;
  updated_at: string;
  lat: string;
  log: string;
  url1: string | null;
  url2: string | null;
  group?: string;
}

export interface ResultsValuesInterface {
  value: string;
  label: string;
  country_code: string | undefined;
  group?: string;
}


export interface FiltredValuesInterface {
  label: string;
  country_code: string | undefined;
  value: string;
  group?: string;
}


//typagem do valor passado para função
export interface DataValueInterface {
  name: string;
  email: string;
  password: string;
  telephone: string;
  cpf: string;
  cities: string[];
  countries: string[];
}

