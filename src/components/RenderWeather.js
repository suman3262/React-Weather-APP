import React from 'react'

const RenderWeather = (props) => {

    let weatherInfo= props.Data;
    let cityName=props.Data?.name;
    console.log('i am name',props.Data)
    
    let nationalFlag=`https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    let decs=weatherInfo?.weather?.[0]?.description;
    let weatherIcon=`https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;

    let temp=`${weatherInfo?.main?.temp} °C`;
    let windSpeed=`${weatherInfo?.wind?.speed} m/s`;
    let humidity=`${weatherInfo?.main?.humidity} %`;
    let cloud=`${weatherInfo?.clouds?.all} %`;

  
    return (
    <div className=' mt-10 bg-[#181D31] flex items-center justify-center flex-col'>
        <div className='flex gap-20  justify-between items-center'>
        <h2 className='text-[2rem] '>{cityName}</h2>
        <div className='w-[20%]'><img src={nationalFlag} alt="" /></div>
        </div>
        {/* sky */}
        <div className=' md:min-w-[8rem]  flex flex-col items-center justify-center  '>
        <h2 className='text-[1.4rem] mt-1'>{decs}</h2>
        <img className=' 'src={weatherIcon} alt="" />
        </div>

        <h3 className='text-[2rem]'>{temp}</h3>
        
        {/* cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2	 md:grid md:grid-cols-3  justify-center  p-10 gap-10'>
            <div className='bg-[#245953] p-5 min-w-[20%] border-2 '>
                <img src="" alt="" />
                <h3>Wind Speed</h3>
                <h3>{windSpeed}</h3>
            </div>
            <div className='bg-[#245953] p-5 min-w-[20%] border-2 '>
                <img src="" alt="" />
                <h3>Humidity</h3>
                <h3>{humidity}</h3>
            </div>
            <div className='bg-[#245953] p-5 min-w-[20%] border-2 '>
                <img src="" alt="" />
                <h3>Cloud</h3>
                <h3>{cloud}</h3>
            </div>
        </div>
        
    </div>
  )
}

export default RenderWeather