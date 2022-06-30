import React from "react";

const CountryDetails = ({selectedCountry}) => {
    if (selectedCountry === null) {
        return null;
    }
    return(
        <div>
            <h3>{selectedCountry.name.common}</h3>
            <p>{selectedCountry.capital[0]}</p>
            <img src={selectedCountry.flags.png} alt="Country Flag "/>
        </div>
    );
};

export default CountryDetails;