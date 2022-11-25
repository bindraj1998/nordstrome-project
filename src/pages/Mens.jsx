import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'
import {dat1,dat2} from "../data/men"
const Mens = () => {
    // const[dat1,setdata1]=useState([])
    // const[dat2,setdata2]=useState([])
   const {product} =useContext(Context)
   const navigate=useNavigate()
    const handleadd=(el)=>{
      product(el)
      navigate("/setsize")

    }  

    
        
  return (
    <div>
        <div style={{display:"flex",width:"100%",gap:"10px",margin:"auto",marginTop:"20px",textAlign:"start",marginBottom:'-400px'}}>
             <div ><Link to="/shirt"><img style={{height:"43%",marginLeft:100}} src="https://n.nordstrommedia.com/id/sr3/516596fe-b09f-4099-92a2-dbb35f361964.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"/>
             
             </Link>
               <p style={{fontWeight:"bold",fontSize:"15px"}}>90 Degree by Reflex, Z by Zella & More</p>
               <p style={{fontSize:"10px"}}>Run, lift, lunge—and look great while you do it.</p>
            

             </div>
             <div ><Link to="/shos"><img src="https://n.nordstrommedia.com/id/028e451c-47f7-4106-9d6f-d184b8447e60.jpeg?h=555&w=804"/>
             
             </Link>
               <p style={{fontWeight:"bold",fontSize:"15px"}}>New Balance, adidas & More</p>
               <p style={{fontSize:"10px"}}>Pairs for sightseeing, gym sessions—whatever you've got on your agenda.</p>
             </div>

          </div>
<Heading style={{marginBottom:'30px'}}>jocket</Heading>
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


<Heading style={{marginBottom:"30px"}}>Blazers & Sport Coats</Heading>
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

export default Mens