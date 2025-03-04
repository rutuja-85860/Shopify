import React from 'react'
import { useSelector } from 'react-redux'

export default function Cartpage() {
    const cartdata =  useSelector(state=>state.cart)

    console.log(cartdata)

    return (
      <div>
          
       {
        cartdata.map((data)=>{
            return(
                <>
                   <h1>{data.title}</h1>
                   <img src={data.thumbnail}/>
                </>

            )
        })
       }
  
  
      </div>
  )
}
