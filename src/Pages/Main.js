import React from 'react'
import Cart from '../Components/Cart';
import Cart1 from '../Components/Cart1';
import Cart2 from '../Components/Cart2';
const Main = () => {
  return (
    <div className='maini'>
      <div style={{marginLeft:"100px",marginRight:"100px"}}>
      <Cart/>
      </div>
      <div style={{marginLeft:"100px",marginRight:"100px"}}>
      <Cart1/>
      </div>
      <div style={{marginLeft:"100px",marginRight:"100px"}}>
      <Cart2/>
      </div>
      
    </div>
  )
}

export default Main;
