import React from 'react'
import '../css/Categories.css';

import { Link } from 'react-router-dom';
const Categories = () => {
  return (
   
   <div className='title'>
     <h4>Categories</h4>
   <div className='Categories'>
      <div className='inner1'>
        <h4 style={{marginTop:'30px',textAlign:"center"}}>Beauty</h4>
        <Link class="hover:underline text-blue-500" href="/Categories/Beauty"to="/Beauty">View products</Link>
      </div>
      <div className='inner2'>
         <h4 style={{marginTop:'30px',textAlign:"center"}}>Fragrances</h4>
         <Link class="hover:underline text-blue-500" href="/Categories/Fragrances"to="/Fragrances">View products</Link>  </div>
      <div className='inner3'>
      <h4 style={{marginTop:'30px',textAlign:"center"}}>Furniture</h4>
      <Link class="hover:underline text-blue-500" href="/Categories/Furniture"to="/Furniture">View products</Link>
      </div>
      <div className='inner4'>
      <h4 style={{marginTop:'30px',textAlign:"center"}}>Groceries </h4>
      <Link class="hover:underline text-blue-500" href="Categories/Groceries"to="/Groceries ">View products</Link>
      </div>
      
     

      

      
    </div>
    </div>
  )
}

export default Categories;
