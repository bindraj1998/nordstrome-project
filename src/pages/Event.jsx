import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import{Text,Heading} from "@chakra-ui/react"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import data from "../data/event"
import { useContext } from 'react';
import { Context } from '../context/Context';
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const Event = () => {
  const{product}=useContext(Context)
  const navigate=useNavigate()
  const handleadd=(el)=>{
    product(el)
    navigate("/setsize")

  } 
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const[dat,setdata]=useState([])
     console.log(dat)
  

  
  
  const data=[
    {id:1,name:"Z by Zella",title:"Printed Daily High Waist 7/8 Leggings",price:"$10.86 - $11.94" ,dis:"$14.48 - $15.93",url:"https://n.nordstrommedia.com/id/sr3/1405f851-4823-433c-8b0b-e2bfe8a1d11a.jpeg?h=365&w=240&dpr=2"},
    {id:2,name:"Sweaty Betty",title:"Illusion Seamless Sports Bra",price:"$20.79Current" ,dis:"$27.73",url:"https://n.nordstrommedia.com/id/sr3/c53e4fd7-3a48-420f-911e-8088e36a87a1.jpeg?h=365&w=240&dpr=2"},
    {id:3,name:"90 DEGREE BY REFLEX",title:"Wonderlink Abstract Feather Print Bike Shorts",price:"$ 14.97 (64% off)" ,dis:"$42.00",url:"https://n.nordstrommedia.com/id/sr3/b124627a-a758-4649-bcf0-086c802d74b4.jpeg?h=365&w=240&dpr=2"},
    {id:4,name:"90 DEGREE BY REFLEX",title:"Wonderlink Abstract Feather Print Crop Tank Top",price:"$7.11 -$18.97 (Extra 25% off select)" ,dis:"$9.40-$14.23",url:"https://n.nordstrommedia.com/id/sr3/fd7583d5-901a-4e2a-83fc-203acb8af9e1.jpeg?h=365&w=240&dpr=2"},
    {id:5,name:"Z by Zella",title:"Longline Sports Bra",price:"$15.97 (61%off)" ,dis:"42.00",url:"https://n.nordstrommedia.com/id/sr3/29163493-3cb6-4153-ae32-dd0feb552262.jpeg?h=365&w=240&dpr=2"},
    {id:6,name:"90 DEGREE BY REFLEX",title:"Lux Camo High Waisted Ankle Leggings",price:"$19.97 (74%off)" ,dis:"$78.00",url:"https://n.nordstrommedia.com/id/sr3/2964e02e-de65-4479-89cc-0a426803333c.jpeg?h=365&w=240&dpr=2"},
    {id:7,name:"Z by Zella",title:"Training Racerback Tank (Plus Size)",price:"$5.05 (Extra 25% off)" ,dis:"$6.74",url:"https://n.nordstrommedia.com/id/sr3/3793dbce-add8-424b-a6fa-bf24e1ecb0e1.jpeg?h=365&w=240&dpr=2"},

    {id:8,name:"Sweaty Betty",title:"Super Sculpt Pocket 7/8 Yoga Leggings",price:"$26.00" ,dis:"",url:"https://n.nordstrommedia.com/id/sr3/3f61d58f-2a5e-42d2-a509-52f4278960e8.jpeg?h=365&w=240&dpr=2"},
   
  
  
  ]
  const data2=[
    {id:1,time:"Limited-Time Sale",name:"Z by Zella",title:"Ribbed Seamless Longline Bralette",price:"$7.29-$14.97",dis:"$9.8",url:"https://n.nordstrommedia.com/id/sr3/11d1cf50-3a00-4c49-9079-0867079ec943.jpeg?h=365&w=240&dpr=2"},
    {id:2,time:"Limited-Time Sale",name:"90 DEGREE BY REFLEX",title:"Running Shorts",price:"$11.23(Extra 25% off)",dis:"$14.56",url:"https://n.nordstrommedia.com/id/sr3/8bf87767-303f-4bcc-9620-8fdeff1750ac.jpeg?h=365&w=240&dpr=2"},
    {id:3,time:"Limited-Time Sale",ame:"Z by Zella",title:"Sweat To Swim UPF Bra",price:"$10.48-$11.23",dis:"$13.48-$11.35",url:"https://n.nordstrommedia.com/id/sr3/2647d821-1193-4bfd-865a-4c13313af68a.jpeg?h=365&w=240&dpr=2"},
    {id:4,time:"Limited-Time Sale",name:"90 DEGREE BY REFLEX",title:"Superflex High Rise Elastic Free Pocket Ankle Leggings",price:"$11.23-$19.97",dis:"$14.94",url:"https://n.nordstrommedia.com/id/sr3/4246bc7e-8ce9-457f-822e-56a58d7936ff.jpeg?h=365&w=240&dpr=2"},
    {id:5,time:"Limited-Time Sale",name:"Z by Zella",title:"Longline Sports Bra",price:"$15.97 (61%off)" ,dis:"42.00",url:"https://n.nordstrommedia.com/id/sr3/29163493-3cb6-4153-ae32-dd0feb552262.jpeg?h=365&w=240&dpr=2"},
    {id:6,time:"Limited-Time Sale",name:"90 DEGREE BY REFLEX",title:"Lux Camo High Waisted Ankle Leggings",price:"$19.97 (74%off)" ,dis:"$78.00",url:"https://n.nordstrommedia.com/id/sr3/2964e02e-de65-4479-89cc-0a426803333c.jpeg?h=365&w=240&dpr=2"},
    {id:7,time:"Limited-Time Sale",name:"Z by Zella",title:"Training Racerback Tank (Plus Size)",price:"$5.05 (Extra 25% off)" ,dis:"$6.74",url:"https://n.nordstrommedia.com/id/sr3/3793dbce-add8-424b-a6fa-bf24e1ecb0e1.jpeg?h=365&w=240&dpr=2"},

    {id:8,time:"Limited-Time Sale",name:"Sweaty Betty",title:"Super Sculpt Pocket 7/8 Yoga Leggings",price:"$26.00" ,dis:"",url:"https://n.nordstrommedia.com/id/sr3/3f61d58f-2a5e-42d2-a509-52f4278960e8.jpeg?h=365&w=240&dpr=2"},
    
  
  ]
  return (
    <div>
         <div style={{textAlign:"start",marginBottom:"30px"}}><Text fontSize='4xl'>Spotlight</Text></div>
      <div style={{width:"90%",margin:"auto",height:"200px"}}>

      <Slider {...settings}>
      {data.map((el)=>(
       <div className='eventimg'>
        <img  src={el.url}/>
        
        <p>{el.name}</p>
        <p>{el.title}</p>
        <p>{el.price}</p>
        <p style={{textDecorationLine: 'line-through'}}>{el.dis}</p>
    
       </div>

      ))}
      </Slider>
      </div>
      <div className='display'>

        
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

export default Event