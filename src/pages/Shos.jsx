import { Heading, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from 'react-elastic-carousel';
import dat from "../data/shoes"
import { useContext } from 'react';
import { Context } from '../context/Context';

const Shos = () => {
const navigate=useNavigate()
  const {product} =useContext(Context)
  const handleadd=(el)=>{
    product(el)
    navigate("/setsize")

  }       

const crosel=[{title:"Up to 40% Off",image:"https://n.nordstrommedia.com/id/8ab1568f-70ad-4406-93f6-d88658083303.jpeg?h=720&w=1608"},
                {title:"Cold-Weather Boots",image:"https://n.nordstrommedia.com/id/05b08863-a1c7-4135-9591-44eea2be568b.jpeg?h=720&w=1608"}
                  ,{title:"Festive Looks Up to 60% Off",image:"https://n.nordstrommedia.com/id/22de271f-879c-475a-bd10-0c718b3c3bc1.jpeg?h=720&w=1608"}
]
  
    
  return (
    <div>

    
<div><Carousel>
         {crosel.map((el,i)=>(
          <div key={i} ><img src={el.image}/>
         <Stack mt="-19" mr="60%" textAlign="start"><Heading size="sm" mt="-30px">{el.title}</Heading></Stack>
          </div>
         ))}
          </Carousel></div>

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

export default Shos