//Import Hooks
import { createContext, useEffect, useState } from "react";
// Imports Interfaces
import {
  AuthContextComponentInterface,
  AuthContextInterface,
  CityResultsInterFace,
  CountryResultsInterface,
  DataValueInterface,
  FiltredValuesInterface,
  ResultsValuesInterface,
} from "../../interfaces/authContextInterface/authContextInterface";
//Import Api
import { api } from "../../services/apiContry/api";
//import components
import { toast } from "react-toastify"

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
  const [filtredCity, setfiltredCity] = useState<FiltredValuesInterface[]>(
    [] as FiltredValuesInterface[]
  );


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
    return obj.map(({ name: value, name_ptbr: label, country_code, code }) => {
      
      if(country_code == undefined){
        return { value: `${label} - ${code}`, label, country_code,  group: undefined};
      }else{
        return {value: `${value} - ${country_code}`, label, group: country_code, country_code}
      }
    });
  }

  //funtion filter
  const filterCountry = (list: FiltredValuesInterface[]) => {
    setFiltredCountry([]);

    list.filter((elem) => {
      return cityValues.map((city) => {
        if (city.label == "" || city.label == undefined || city.label == null) {
          return;
        }

        city.label?.includes(elem.value.split(" ")[0]) &&
          setFiltredCountry((old) => [elem, ...old]);
      });
    });

    setfiltredCity(
      cityValues.filter((elem, i) => {
        return elem.label != undefined && elem.label != null && i < 100 && elem;
      })
    );

    if (filtredCountry.length != 0) {
      setFiltredCountry(
        filtredCountry.filter((elem, i) => elem != filtredCountry[i + 1])
      );
      setLoading(false);
    }
  };

  //handleSubmit hook Form
  const handleSubmitFunction = (data: DataValueInterface) => {
    toast.success(`${data.name}, Registrado com sucesso`)
    console.log(data);
    return data
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        filtredCountry,
        filtredCity,
        handleSubmitFunction
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
