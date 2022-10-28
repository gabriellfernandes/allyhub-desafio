import { ReactNode } from "react";

export interface AuthContextInterface {
  city: CityResultsInterFace[];
  country: CountryResultsInterface[];
  loading: boolean;
  cityValues: ResultsValuesInterface[];
  countryValues: ResultsValuesInterface[];
  filtredCountry: FiltredValuesInterface[];
}

export interface AuthContextComponentInterface {
  children: ReactNode;
}

export interface CountryResultsInterface {
  code: string;
  name_ptbr: string;
  name: string;
  country_code?: string;
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
}

export interface ResultsValuesInterface {
  value: string;
  label: string;
  country_code: string | undefined;
}


export interface FiltredValuesInterface {
  label: string;
  country_code: string | undefined;
  value: string;
}
