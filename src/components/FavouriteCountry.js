import React from "react";
import CountryItem from "../components/CountryItem"

const FavouriteCountry = ({favouriteClicked, favouriteCountries, countryClicked}) => {
    const favouriteCountryNodes = favouriteCountries.map((country, index) => {
        // return console.log(country)
        return <CountryItem country={country} key={index} index={index} favouriteClicked={favouriteClicked} countryClicked={countryClicked}/>
    })
    return(
        <div>
            <ul>
                {favouriteCountryNodes}
            </ul>
        </div>
    );
}
export default FavouriteCountry