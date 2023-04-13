import React from 'react'
import {BiCurrentLocation} from 'react-icons/bi'

const GrantLocation = ({setCords}) => {
  
let PositionObj={
    Long:0,    
    Lat:0
} 

function grantLocationHandler()
{
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);

    } else { 
            //Toast
        }
     
    function showPosition(position) {
        
        PositionObj.Long= position.coords.longitude; 
        PositionObj.Lat= position.coords.latitude;    
       
        setCords(PositionObj);
          }
}





    return (

    <div className='flex items-center gap-1 mt-5 flex-col'>
        <div className='flex items-center gap-5'>
        <BiCurrentLocation/>
        <h3>Grant Location Access</h3>
        </div>
        <div>
        <h5>Allow Access to get weather info</h5>
        </div>
        <div>
        <button className=' text-black rounded-sm  p-2 w-[100%] md:w-[100%]  bg-[#678983]  '  onClick={grantLocationHandler} >GRANT ACCESS</button>
        </div>
        
    </div>
  )
}

export default GrantLocation