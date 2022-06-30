import React,{useState, useEffect} from "react";
import CountriesList from "../components/CountriesList";
import CountryDetails from "../components/CountryDetails";
import FavouriteCountry from "../components/FavouriteCountry";

const CountriesContainer = () => {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [totalPopulation, setTotalPopulation] = useState(0);
    const [favouriteCountries, setFavouriteCountries] = useState([]);


    useEffect(()=>{
        getCountries();
        countTotalPopulation();
    },[countries])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((countries) => setCountries(countries))
    }

    const countryClicked = function(country) {
        setSelectedCountry(country)
    }

    const favouriteClicked = function(index){
        const addedFav = countries[index]
        let updatedFavourites;
        for(const favCountry of favouriteCountries){
            if (favCountry.ccn3 === countries[index].ccn3){
                return console.log('exists')
            }else{
                updatedFavourites = [...favouriteCountries, addedFav]
            }
        }

        updatedFavourites = [...favouriteCountries, addedFav]
        setFavouriteCountries(updatedFavourites)
    }



    const countTotalPopulation = () => {

        const findPopulation = countries.map((country) => {
            return country.population
        })

        const totalPop = findPopulation.reduce((total, current) => {
            return total + current
        }, 0)

        setTotalPopulation(totalPop)
    }

    return(
        <div>
            <h1>Total Population of All Countries: {totalPopulation}</h1>
            <CountryDetails selectedCountry={selectedCountry} />
            <h2>Favourite countries:</h2>
            <FavouriteCountry favouriteCountries={favouriteCountries} countryClicked={countryClicked} favouriteClicked={favouriteClicked}/>
            <h2>Countries List:</h2>
            <CountriesList countries={countries} countryClicked={countryClicked} favouriteClicked={favouriteClicked}/>

        </div>
    )

}

export default CountriesContainer;