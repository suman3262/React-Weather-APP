import React from 'react'
import { useState,useEffect } from 'react';
import {FcSearch} from "react-icons/fc"
const SearchWeather = ({getCityData}) => {

  const [city, setcity] = useState("");

  useEffect(() => {

  }, [city]);


  function handleInputChange(event) {
    setcity(event.target.value);
  }

  function searchHandler(event)
  {
      event.preventDefault();
      getCityData(city);
  }



  return (
    <div className='  pr-8 gap-5 md:gap-10 pl-[10%]  border-white mt-10 md:flex md:flex-row flex flex-col items-center justify-center'>
        
        <input className='md:w-[30%] outline-0 h-10  w-[100%] pl-2 rounded focus:ring-0 bg-[#678983]' type="text" onChange={handleInputChange} id='search-input' placeholder='Search for city...' />
        <button className='pr-3 ' onClick={searchHandler} ><FcSearch fontSize="2rem" /></button>
        
    </div>
  )
}

export default SearchWeather