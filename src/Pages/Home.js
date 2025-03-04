import React from 'react'
import '../css/Home.css'
import Trending from '../Components/Trending';
import Divs from '../Components/Divs';
import Arrival from '../Components/Arrival';
import IMG1 from '../Images/img1.webp';
const Home = () => {
  return (
    <div>
      <div className='header'>
        <div className='left'>
          <p class="text-black dark:text-white">Starting At <span class="font-bold">$999</span></p>
          <h2 class="text-black dark:text-white ">The best notebook <br />collection 2024</h2>
          <h3 class="text-2xl dark:text-white">Exclusive offer <span class="text-red-600">-10%</span> off this week</h3>
          <button data-test="hero-btn" class="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white " >Shop Now</button>
        </div>
        <div className='right'>
          <img src={IMG1} className="d-block w-100" alt="..." />
        </div>
      </div>
      <div className='section'>
        <div className='info'>
         <h3>Free Delivary</h3>
          <p>Orders from all items</p>
        </div>
        <div className='info'>
        <h3>Return & Refund</h3>
        <p>Money back guarantee</p>
        </div>
        <div className='info'>
        <h3>Member Discount</h3>
        <p>On order over $99</p>
        </div>
        <div className='info'>
        <h3>Support 24/7</h3>
        <p>Contact us 24 hours a day</p>
        </div>

      </div>
      <Trending/>
      <Divs/>
      <Arrival/>
    </div>


  )
}

export default Home;
