import { background, Button, Heading, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import Carousel from 'react-elastic-carousel';
import styles from "./styles.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
const Home = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  

  const data=[{img:'https://n.nordstrommedia.com/id/db516501-cee3-473f-81b0-71ab64f88914.jpeg?h=720&w=1608',
      he:"Online & In Stores Through July 24"
},

    {img:"https://n.nordstrommedia.com/id/a5f4b0c2-9b8c-4867-a8d8-b3e5f4600f94.jpeg?h=720&w=1608",
      he:"Up to 65% Off"
  },
    {img:"https://n.nordstrommedia.com/id/a505e62a-33f4-45b4-9a67-1c6db186f102.jpeg?h=720&w=1608",
       he:"Stack Up - Worthy Finds at Amazing Price"
  }
]

   const data4=[
       {imag:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1656647086_102637.jpg"},
       {imag:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1656462636_118613.jpg"}, 
       {imag:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1655235004_147787.jpg"}, 
       {imag:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1654448604_167772.jpg"},
        {imag:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU0MzczNDY0LjUyODE5MTYxNzc4LmpwZWc=.jpg?w=640&h=640&fit=cover"},
         {imag:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ5Nzc5MTAwLjU5OTc3NjQzNTQ5LmpwZWc=.jpg?w=640&h=640&fit=cover"},
         {imag:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1647972588_156888.jpg"},
         {imag:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1648226651_192192.jpg"},
         {imag:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1647972588_156888.jpg"},
         {imag:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ3OTgyNTA3LjEyMTQyNTIzNzc4OC5qcGVn.jpg?w=640&h=640&fit=cover"},
         {imag:"https://dashhudson-static.s3.amazonaws.com/media/video_frames/1646075206_149858.jpg"},
         {imag:"https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ0OTU2MDExLjA1NzIyOTM2NTE1Ny5qcGVn.jpg?w=640&h=640&fit=cover"}



   ]

const data1=[

  {img:"https://n.nordstrommedia.com/id/sr3/906854ac-0241-4372-8f80-48146e208ffe.jpeg?q=45&dpr=2&h=365.31&w=230",time:"Limited-Time Sale",name:"adidas",price:"27.54 (Extra 25% off)",dis:"36.72"},
  {img:"https://n.nordstrommedia.com/id/sr3/4065a14d-3854-4a63-beaf-30f2ec20f237.jpeg?q=45&dpr=2&h=365.31&w=230",time:"Limited-Time Sale",name:"Sam Edelman",price:"$33.73-$69.97",dis:"$44.90-$49.99"},
  {img:"https://n.nordstrommedia.com/id/sr3/6af86832-c67f-4237-87e0-a023e37d4f7e.jpeg?q=45&dpr=2&h=365.31&w=230",time:"Limited-Time Sale",name:"rag & bone",price:"$25.47 (Extra 25% off)",dis:"$33.97"},
  {img:"https://n.nordstrommedia.com/id/sr3/7cfaa1d0-1f34-4112-ac41-57f341b037a5.jpeg?q=45&dpr=2&h=365.31&w=230",time:"Limited-Time Sale",name:"Under Armour",price:"$30.93 (Extra 25% off)",dis:"$41.24"},
  {img:"https://n.nordstrommedia.com/id/sr3/6f31ad4f-f4eb-4173-b943-74a4760bd00c.jpeg?q=45&dpr=2&h=365.31&w=230",time:"Limited-Time Sale",name:"Belle And bloom",price:"$139.97 (50% off)",dis:"$279.95"},
  {img:"https://n.nordstrommedia.com/id/sr3/26e47c0d-8ae4-4e22-be06-5cf8bfda3e75.jpeg?q=45&dpr=2&h=365.31&w=230",time:"Limited-Time Sale",name:"HOMESPUN",price:"37.66 -$39.34 (Extra 25% off)",dis:"$50-$52.46"},
  {img:"https://n.nordstrommedia.com/id/sr3/80e04cc4-9008-409f-ab98-4956626d1c6e.jpeg?q=45&dpr=2&h=365.31&w=230",time:"Limited-Time Sale",name:"Stella McCartney",price:"$189 (39% off)",dis:"$315.00"},
  {img:"https://n.nordstrommedia.com/id/sr3/8776598b-9fb2-44e1-a93d-767782581cc4.jpeg?q=45&dpr=2&h=365.31&w=230",time:"Limited-Time Sale",name:"Stella McCartney",price:"$ 449.97 (38% off)",dis:"$ 730.00"},
  {img:"https://n.nordstrommedia.com/id/sr3/a94a861b-2cc2-467e-8ac8-d89f1a753919.jpeg?q=45&dpr=2&h=365.31&w=230",time:"Limited-Time Sale",name:"Under Armour",price:"$ 28.09 (Extra 25% off)",dis:"$ 37.46"},
// //   {img:"",time:"Limited-Time Sale",name:"",price:"",dis:""},
//     {img:"",time:"Limited-Time Sale",name:"",price:"",dis:""},
// {img:"",time:"Limited-Time Sale",name:"",price:"",dis:""},



]
const data2=[

  {img:"https://n.nordstrommedia.com/id/a2095c23-e54d-44c6-885b-b56c16aa6f75.jpeg?h=200&w=1606"},
  {img:"https://n.nordstrommedia.com/id/c01ff961-11fe-4665-88d9-3d5bf084390c.jpeg?h=200&w=1608"},
  
]


    
  return (
    <div>
        <Stack> <Text fontWeight="bold" color="black" fontSize='xl'> More to Rack , easier and faster</Text></Stack>
    
       <div style={{border:'.5px solid black',width:"20%",margin:"auto",hover:"color red",marginTop:"20px",marginBottom:"20px"}}><Link to="/signin">Sign In or Create an Account</Link></div>

        <div><Carousel>
         {data.map((el,i)=>(
          <div key={i} ><img src={el.img}/>
         <Stack mt="-19" mr="60%" textAlign="start"><Heading size="sm" mt="-30px">{el.he}</Heading></Stack>
          </div>
         ))}
          </Carousel></div>
          <Heading fontWeight="bold" fontSize="2xl" mt="20px">Here Today, Gone in a Flash</Heading>

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
         
             <Heading fontWeight="bold" fontSize="2xl" mt="20px">Made for the Way You Move</Heading>
             
             <div style={{display:"flex",width:"100%",gap:"10px",margin:"auto",marginTop:"20px",textAlign:"start"}}>
             <div ><Link to="/event"><img src="https://n.nordstrommedia.com/id/c22f169e-4099-4cd3-b71c-4584a5241bb7.jpeg?h=555&w=804"/>
             
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
          
          <div style={{marginTop:"30px",marginLeft:"30px"}}><Heading textAlign="start" fontSize="2xl" >Trending now</Heading></div>

         <div  style={{width:"80%" ,margin:"0 auto",marginTop:"30px"}}>
             <Slider {...settings}>
            {data1.map((item)=>(

              
<div className='cart'>
         {/* <div > */}
          <img src={item.img} alt={item.id}/>
          <div style={{textAlign:"start"}}>
          <h1>{item.time}</h1>
           <p>{item.name}</p> 
           <p>{item.price}</p>
           <p style={{textDecorationLine: 'line-through'}}>{item.dis}</p>
           </div>
         {/* </div> */}
         {/* <div className='cart-buttom'>
          <p>{item.id}</p>
         </div> */}
       </div>


))}
</Slider> 
         
          </div> 
        
        <div style={{marginTop:"40px"}}><Carousel>
         {data2.map((el,i)=>(
          <div key={i} ><img src={el.img}/>
         <Stack mt="-19" mr="60%" textAlign="start"><Heading size="sm" mt="-30px">{el.he}</Heading></Stack>
          </div>
         ))}
          </Carousel></div>
        <div>
           <div style={{marginTop:"30px",size:"md",textAlign:"start"}}><Heading size="md">Fresh for summer</Heading></div>

           <div style={{display:"flex"}}>
            <div><Link to="/sandle">
              <img src="https://n.nordstrommedia.com/id/38e8a418-5476-499d-979c-960f17e85acc.jpeg?h=501&w=536"/>
               <p>Sandals from $39.97</p>
               </Link>
               <p>Dolce Vita, Abound and more.</p>
            </div>
            <div>
              <Link to="/sunglass">
              <img src="https://n.nordstrommedia.com/id/793bcaaa-e669-4840-80d9-8b146a0a8a44.jpeg?h=501&w=536"/>
              <p>Ray-Ban & More</p>
              <p>The right pair can make an outfit.</p>
              </Link>
            </div>
            <div><Link to="/shirt">
              <img src="https://n.nordstrommedia.com/id/32027837-2f66-4984-ba1d-c42500de3892.jpeg?h=501&w=536"/>
                <p>Men's Polos & Shorts from $59.97</p>
                </Link>
            </div>
           </div>
        </div>
        <div><Heading size="md" fontWeight="bold" mt="30px">Rack Your Look</Heading>
             <p style={{fontSize:"10px",marginBottom:"5px"}}>Click your favorite photos to shop our Instagram, and use #nordstromrack for a chance to be featured!</p>
        </div>
        <div style={{height:"200px",marginTop:"80px",width:"90%",margin:"auto"}} >

          <Slider {...settings}>
              
            {data4.map((el)=>(
              
                <div  className='last'>
              <img src={el.imag}/>
              </div>
              
            ))}
            
          </Slider>
        </div>
        <div style={{height:"150px",marginTop:"200px",backgroundColor:"#0c98bb",padding:"30px",color:"white"}}>
          <Heading>GET EXCLUSIVE OFFERS</Heading>
           <p>Sign up and be first to know about flash events, new markdowns, private sales and more. Sign Up</p>
        </div>
         <div style={{display:"flex",justifyContent:"right",margin:"40px",gap:"5px"}}><Input width="40%" type="text" placeholder='Email'/>
           <Button colorScheme='teal' variant='outline' backgroundColor="gray.100" width="40">SIGN UP</Button>
         </div>
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

export default Home