import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [hello, setHello] = useState('Hello World');

    useEffect(() => {
        axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) => setData(res.data));
    }, []) 
 
    return (
        <div>
            <div className="countries">
            <ul className="radio-container">
                <input type="range" min="1" max="250"/>
            </ul>
            
                <h1>COUNTRIES</h1>
                <ul>
                    {data.map((country, index) => (
                        <Card key={index} country={country}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Countries;