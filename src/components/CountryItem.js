import React from "react";

const CountryItem = ({country, index, countryClicked, favouriteClicked}) => {

    const handleClick = () => {
        countryClicked(country)
    }

    const handleFavourite = (evt) => {
        favouriteClicked(evt.target.value)
    }

    return(
        <li>
            <h3 onClick={handleClick}>{country.name.common}</h3>
            <button onClick={handleFavourite} value={index}>Favourite</button>
        </li>
    )
}

export default CountryItem;