import { createContext, useEffect, useState } from "react";
import {
  AuthContextComponentInterface,
  AuthContextInterface,
  CityResultsInterFace,
  CountryResultsInterface,
  FiltredValuesInterface,
  ResultsValuesInterface,
} from "../../interfaces/authContextInterface/authContextInterface";
import { api } from "../../services/apiContry/api";

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthContextComponent = ({
  children,
}: AuthContextComponentInterface) => {
  const [country, setCountry] = useState<CountryResultsInterface[]>(
    [] as CountryResultsInterface[]
  );
  const [city, setCity] = useState<CityResultsInterFace[]>(
    [] as CityResultsInterFace[]
  );
  const [countryValues, setCountryValues] = useState<ResultsValuesInterface[]>(
    [] as ResultsValuesInterface[]
  );
  const [cityValues, setCityValues] = useState<ResultsValuesInterface[]>(
    [] as ResultsValuesInterface[]
  );
  const [filtredCountry, setFiltredCountry] = useState<
    FiltredValuesInterface[]
  >([] as FiltredValuesInterface[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    country.length === 0 &&
      api
        .get<CountryResultsInterface[]>("country")
        .then((res) => {
          setCountry(res.data);
          setCountryValues(codeConverterValues(res.data));
        })
        .catch((err) => console.log(err));

    city.length === 0 &&
      api
        .get<CityResultsInterFace[]>("city")
        .then((res) => {
          setCity(res.data);
          setCityValues(codeConverterValues(res.data));
        })
        .catch((err) => console.log(err))

    countryValues.length != 0 && filterCountry(countryValues);
  }, []);

  useEffect(() => {
    filterCountry(countryValues);
  }, [countryValues, cityValues]);

  function codeConverterValues(
    obj: CityResultsInterFace[] | CountryResultsInterface[]
  ) {
    return obj.map(({ code: value, name_ptbr: label, country_code }) => {
      return { value, label, country_code };
    });
  }

  const filterCountry = (list: FiltredValuesInterface[]) => {
    setFiltredCountry([]);

    list.filter((elem) => {
      return cityValues.map((city) => {
        if (city.label == "" || city.label == undefined || city.label == null) {
          return;
        }

        city.country_code?.includes(elem.value) &&
          setFiltredCountry((old) => [elem, ...old]);
      });
    });

    if (filtredCountry.length != 0) {
      setFiltredCountry(
        filtredCountry.filter((elem, i) => elem != filtredCountry[i + 1])
      );
      setLoading(false)
    }
  };

  return (
    <AuthContext.Provider
      value={{
        city,
        country,
        loading,
        cityValues,
        countryValues,
        filtredCountry,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
