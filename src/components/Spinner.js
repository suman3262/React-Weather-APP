import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex justify-center mt-10'>
    <div class="lds-roller">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    </div>
  )
}

export default Spinner