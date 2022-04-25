import React from 'react'
import { useState, useEffect } from 'react';
import './CSS/style.css';
const TempApp = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    try {
      const getData = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=849d230de614a0702d055fcff01af968`;
        const data = await fetch(url);
        const response = await data.json();
        setCity(response.main);
      }
      getData();
    } catch (error) {

    }

  }, [search])
  return (
    <>
      <div className='box'>
        <div className="inputData">
          <input type="search" className="inputField" value={search} onChange={(event) => { setSearch(event.target.value) }} placeholder="Enter City" />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) :
          (
            // <div>
              <div className='info'>
                <h2 className='location'><i className="fa-solid fa-street-view"></i> {search}</h2>
                <h1 className='temp'>{city.temp}&deg;Cel</h1>
                <h3 className='tempmin_max'>Min : {city.temp_min}&deg;Cel | Max : {city.temp_max}&deg;Cel</h3>
              </div>
            // </div>
          )
        }
       <div className="waves">
       <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
       </div>
      </div>
    </>
  )
}

export default TempApp
