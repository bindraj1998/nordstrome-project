import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
import dat from "../data/sunglass"
const Sunglass = () => {
  const {product}=useContext(Context)
  // const[dat,setdata]=useState([])
  const navigate=useNavigate()

  const handleadd=(el)=>{
    product(el)
    navigate("/setsize")

  }       

 
    
  return (
    <div>
     
     <div className='display1'>

        
{dat.map((el)=>(
<div onClick={()=>handleadd(el)}>
  <img src={el.url}/>
  <p>{el.time}</p>
  <p>{el.name}</p>
  <p>{el.price}</p>
  <p  style={{textDecorationLine:"line-through"}}>{el.dis}</p>
</div>

))}</div>


<div className='buttom'>
 
<div>
  <div>
    <Heading size='md'>Customer Service</Heading>
    <p>
Order Status</p>
    <p>Guest Returns</p>
    <p>Shipping & Return</p>
    <p>Policy</p>
    <p>Gift Cards</p>
    <p>FAQ</p>

  </div>
</div>
<div>
  <div><Heading size='md'>About Us</Heading>
  <p>About Our Brand</p>
  <p>The Nordy Club</p>
  <p>Store Locator</p>
  <p>All Brands</p>
  <p>Careers</p>
  <p>Get Email Updates</p>

  </div>
</div>
<div>
  <div><Heading size='md'>Nordstrom Rack & The Community</Heading>
  <p>Corporate Social Responsibility</p>           
   <p>Diversity, Inclusion & Belonging</p>

  
  <p>Donate Clothes</p>
  

  </div>
</div>
<div>
  <div>
    <Heading size='md'>Nordstrom Card</Heading>
    <p>Apply for a Nordstrom Card</p>
    <p>Pay My Bill</p>
    <p>Manage my Nordstrom Card</p>
    

  </div>
</div>
<div>
  <div><Heading size='md'>Nordstrom, Inc.</Heading>
   <p>Nordstrom</p>
   <p>Nordstrom Canada</p>
   <p>HauteLook</p>
   <p>Investor Relations</p>

  </div>
</div>

</div>
</div>


    
  )
}

export default Sunglass