import React from 'react'
import Banner from '../Images/banner.jpg';
import'../css/Divs.css';
const Divs = () => {
  return (
   
      <div className='offer'>
         <div className='picture'>
    <img src={Banner } className="d-block w-100" alt="..." />
   </div>
    <div className='information'>
        <h1>Don't miss the offer<br/>Grab it now</h1>
  <button>Shop Now</button>

    </div>

    </div>
  )
}

export default Divs;
