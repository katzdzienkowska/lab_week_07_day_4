import React from "react";
import CountryItem from "../components/CountryItem"

const CountriesList = ({countries, countryClicked, favouriteClicked}) => {
    const countryNodes = countries.map((country, index) => {
        // return console.log(country)
        return <CountryItem country={country} key={index} index={index} countryClicked={countryClicked} favouriteClicked={favouriteClicked}/>
    })

    return(
        <div>
            <ul>
                {countryNodes}
            </ul>
        </div>
    );
};

export default CountriesList;