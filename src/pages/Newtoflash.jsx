import { Heading, Stack} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from 'react-elastic-carousel';
import data from "../data/newflash"
import { useContext } from 'react';
import { Context } from '../context/Context';


const Newtoflash = () => {
  const navigate=useNavigate()
  
  // const[dat,setdata]=useState([])
  const {product}=useContext(Context)


  // const [filter,setfilter]=useState("")

  const newflash=[{title:"",image:'https://n.nordstrommedia.com/id/c83a922c-d22c-471e-a3ee-2081e9e0dc24.jpeg?h=200&w=1608'},
                    {title:"",image:"https://n.nordstrommedia.com/id/d71cf08c-0ce9-4bfe-9dba-e9411bcfc8ff.jpeg?h=200&w=1608"}
                  

                  ]  
                   
                  
      const handleadd=(el)=>{
        product(el)
        navigate("/setsize")

      }            

 

  return (
    <div>

<div style={{marginTop:"30",marginBottom:'30'}}><Carousel>
         {newflash.map((el,i)=>(
          <div key={i} ><img src={el.image}/>
         <Stack mt="-19" mr="60%" textAlign="start"><Heading size="sm" mt="-30px">{el.title}</Heading></Stack>
          </div>
         ))}
          </Carousel></div>


  



<div className='display1'>

        
{data.map((el)=>(
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

export default Newtoflash