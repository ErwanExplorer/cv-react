import React from 'react';

const Card = ({country}) => {
    return (
        <div className='countries'>
            <li className="card">
                <img src={country.flags.svg} 
                alt={"drapeau" + country.translations.fra.common}/>
                <div className="infos">
                    <h2>{country.translations.fra.common}</h2>
                    <h4>{country.capital}</h4>
                    <p>Pop. {country.population}</p>
                </div>
            </li>
        </div>
    );
};

export default Card;