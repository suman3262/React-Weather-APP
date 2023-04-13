import React from 'react'

const Button = (props) => {
  let tabHandler= props.tabHandler;
  let searchLocationData= props.searchLocationData;
  let setSearchLocationData=props.setSearchLocationData;


  function myLocationHandler()
  {

    tabHandler(true);
    setSearchLocationData(null);
  }
  function searchButton()
  {
    tabHandler(false);
  }

  return (
    <div className=' mt-7 flex justify-center ' >
        <div className='flex flex-col   md:flex-row gap-[1rem] md:gap-[5rem] md:w-[30%] '>
        <button className=' text-black rounded-sm  p-2 w-[100%] md:w-[40%]  bg-[#678983]  ' onClick={myLocationHandler} >Your Location</button>
        <button  className=' text-black rounded-sm bg-[#678983] p-2 w-[100%] md:w-[40%] 'onClick={searchButton}>Search</button>
        </div>
    </div>
  )
}

export default Button