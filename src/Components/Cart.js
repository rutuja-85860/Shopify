
import React from 'react'
import Image1 from '../Images/Cart1.png';
import Image2 from '../Images/cart2.jpeg';
import Image3 from '../Images/cart3.jpeg';
import Image4 from '../Images/cart4.jpeg';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartdata =  useSelector(state=>state.cart)
  return (
    <div>
     <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col"></th>


    </tr>
  </thead>
  <tbody>{
    
    cartdata.map((data)=>{
      return(
         
            <tr>
      <th scope="row"
      style={{gap:"20px",display:'flex'}}>
      <img style={{height:"80px"}} src={Image1}/>
        <div>
          <h4>Dior J'adore</h4>
          <p>quantity:1</p>
        </div>
      </th>
      <td>$150.00</td>
      <td>- 02 +</td>
      <td>$360.00</td>
      <td colSpan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></td>
    </tr>  
      

      )
  })
    }
    <tr>
      <th scope="row"
      style={{gap:"20px",display:'flex'}}>
      <img style={{height:"80px"}} src={Image1}/>
        <div>
          <h4>Dior J'adore</h4>
          <p>quantity:1</p>
        </div>
      </th>
      <td>$150.00</td>
      <td>- 02 +</td>
      <td>$360.00</td>
      <td colSpan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></td>
    </tr>
    <tr>
      <th scope="row"  style={{gap:"20px",display:'flex'}}>
      <img style={{height:"80px"}} src={Image2}/>
        <div>
          <h4>Lipstick</h4>
          <p>quantity:2</p>
        </div>
      </th>
      <td>$65.00</td>
      <td>- 01 +</td>
      <td>$65.00</td>
      <td colSpan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></td>
    </tr>
    <tr>
      <th scope="row"  style={{gap:"20px",display:'flex'}}>
         <img style={{height:"80px"}} src={Image3}/>
        <div>
          <h4>Powder</h4>
          <p>quantity:1</p>
        </div></th>
      <td >$360.00</td>
      <td>- 01 +</td>
      <td>$360.00</td>
      <td colSpan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></td>

    </tr>
    <tr>
      <th scope="row"  style={{gap:"20px",display:'flex'}}>
         <img style={{height:"80px"}} src={Image4}/>
        <div>
          <h4>Kajal</h4>
          <p>quantity:1</p>
        </div></th>
      <td >$150.00</td>
      <td>- 02 +</td>
      <td>$150.00</td>
      <td colSpan="4"><i class="bi bi-x"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></td>
    </tr>
  </tbody>
</table>

 
    </div>
   
  )
}

export default Cart;

