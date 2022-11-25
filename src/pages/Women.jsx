import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
  import  {dat1,dat2} from "../data/women"
const Women = () => {

  const{product} =useContext(Context)
  const navigate=useNavigate()
  const handleadd=(el)=>{
    product(el)
    navigate("/setsize")

  }  

  

  return (
    <div>
      

          <div style={{display:"flex",width:"100%",gap:"10px",margin:"auto",marginTop:"20px",textAlign:'start'}}>
             <div ><Link to="/newtoflash"><img src="https://n.nordstrommedia.com/id/4f352b37-2a54-4352-9447-7b98580d63d8.jpeg?h=1224&w=1224"/>
             
             </Link>
               <p style={{fontWeight:"bold",fontSize:"15px"}}>New to Flash Stella McCartney Handbags , Apparel and Shoes</p>
               <p style={{fontSize:"10px"}}>Events ends in 2 days, 9 hours ,and 48 minutes</p>
             </div>
             
             <div ><Link to="/event"><img src="https://n.nordstrommedia.com/id/6a679d5b-6411-4afe-b74d-9c9490f4a916.jpeg?h=1224&w=1224"/>
             
             </Link>
               <p style={{fontWeight:"bold",fontSize:"15px"}}>MAX STUDIO Up to 75% Off Incl. Plus</p>
               <p style={{fontSize:"10px"}}>Event ends in 2 days, 9 hours, and 10 minutes</p>
             </div><div ><Link to="/sunglass"><img src="https://n.nordstrommedia.com/id/1927c7ea-b09d-425d-aa1b-bc3d84ba011b.jpeg?h=1224&w=1224"/>
             
             </Link>
               <p style={{fontWeight:"bold",fontSize:"15px"}}>New Women's Designer Sunglasses Up to 70% Off</p>
               <p style={{fontSize:"10px"}}>Event ends in 2 days, 9 hours, and 10 minutes</p>
             </div>
               
          </div>


          <Heading style={{margin:"30px"}}>Blazers</Heading>

<div className='display1'>

        
{dat1.map((el)=>(
<div onClick={()=>handleadd(el)}>
  <img src={el.url}/>
  <p>{el.time}</p>
  <p>{el.name}</p>
  <p>{el.price}</p>
  <p  style={{textDecorationLine:"line-through"}}>{el.dis}</p>
</div>

))}</div>


<Heading style={{margin:"30px"}}>All Skirts</Heading>


<div className='display1'>

        
{dat2.map((el)=>(
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

export default Women