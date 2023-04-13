import "./App.css";
import { useState,useEffect } from "react";
import Button from "./components/Button";
import GrantLocation from "./components/GrantLocation";
import SearchWeather from "./components/SearchWeather";
import RenderWeather from "./components/RenderWeather";
import Spinner from "./components/Spinner.js";
function App() {
  let API_KEY="d4a814af113ad8dfe2fa3c5d1bcb92e8";
  

  const [myLocationData, setMyLocationData] = useState(undefined);
  const [searchLocationData, setSearchLocationData] = useState(undefined);


  async function getweatherData(long,lat)
  {
    try {

     let LocationData =await (await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)).json();
     setMyLocationData(LocationData)
    } catch (error) {
      
    }

  }

  async function getWeatherWithCity(city)
  {
    try {
      const searchingData = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
      ).json();
      setSearchLocationData(searchingData);


    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(() => {

  }, [searchLocationData]);
  useEffect(() => {

  }, [myLocationData]);



  const [Long, setLong] = useState(0);
  const [Lat, setLat] = useState(0);
  const [Tab, setTab] = useState(true);

  function tabHandler(val)
  {
    setTab(val);
  }

  function setCordsDataHandler(cordsdata)
  {
      let {Long, Lat}= cordsdata;
      setLong(parseInt(Long));
      setLat(parseInt(Lat));
      getweatherData(Long,Lat)
  }
  
  if(Lat===0)
  {
      return(
        <div className="w-[100vw] overflow-x-hidden	 h-[100vh] bg-[#181D31] text-white">
        <div className="pt-3 ">
        <h2 className="text-center font-bold text-[2rem]  text-white">Weather Detail Finder</h2>
      </div>
          <div className=" h-[40vh] flex justify-center items-center">
          <GrantLocation setCords={setCordsDataHandler} ></GrantLocation>
          </div>
        </div>
      )
  }
   
  if(Tab===false)
  {
    return (
      <div className="w-[100vw] overflow-x-hidden	 h-[100vh] bg-[#181D31] text-white">
        <div className="pt-3 ">
        <h2 className="text-center font-bold text-[2rem]  text-white">Weather Detail Finder</h2>
      </div>
        <Button  tabHandler={tabHandler} ></Button>
        <SearchWeather  getCityData={getWeatherWithCity}/>
        {
          searchLocationData!==undefined?(<RenderWeather Data={searchLocationData} ></RenderWeather>):(<div  className="flex justify-center mt-5" >
            <div> No data to display</div>
            </div>)
        }
       
      </div>
    );
  }
  return(
    <div className="w-[100vw] overflow-x-hidden	 h-[100vh] bg-[#181D31] text-white">
      <div className="pt-3 ">
      <h2 className="text-center font-bold text-[2rem]  text-white">Weather Detail Finder</h2>
      </div>
        <Button  tabHandler={tabHandler} searchLocationData={searchLocationData} setSearchLocationData={setSearchLocationData}   ></Button>
        { myLocationData!==undefined? (<RenderWeather Data={myLocationData} ></RenderWeather>):(<Spinner/>) }
          
        
    </div>
  )
 
}

export default App;
