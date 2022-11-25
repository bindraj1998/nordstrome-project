import { Button, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

const Cartpage = () => {

    const {data,totalpriceitem,deletedata,totalpricelist}=useContext(Context)
    console.log(totalpricelist)
  return (
    <div style={{backgroundColor:"skyblue"}} >

      {data.length>0?<div>
   {data.map((el)=>(
    <div style={{border:"1px solid gray",height:200,marginTop:5,display:"flex",marginLeft:50,marginRight:50}}>
        <div><img style={{height:200,width:200,marginLeft:50}} src={el.url}/></div>
        <div style={{marginLeft:80,paddingTop:30}}>
    <p> Name : {el.name}</p>
    <p>color : {el.color}</p>
    <p> size : {el.size}</p>
    <p>Quntity : {el.quntity}</p>
   
    <Button style={{marginTop:18,marginLeft:20}} onClick={()=>deletedata(el.id)}>delete item</Button>
    </div>
    </div>

   ))}
   <div style={{marginLeft:300,marginTop:20}}>
  <div>Total price :  $ {totalpricelist}</div>

  <div><Button><Link to="/checkout">Go to checkout</Link></Button></div>
  </div></div>:<div>NO PRODUCT AVAILABLE</div>}
{/* 
   {data.map((el)=>(
    <div style={{border:"1px solid gray",height:200,marginTop:5,display:"flex",marginLeft:50,marginRight:50}}>
        <div><img style={{height:200,width:200,marginLeft:50}} src={el.url}/></div>
        <div style={{marginLeft:80,paddingTop:30}}>
    <p> Name : {el.name}</p>
    <p>color : {el.color}</p>
    <p> size : {el.size}</p>
    <p>Quntity : {el.quntity}</p>
   
    <Button style={{marginTop:18,marginLeft:20}} onClick={()=>deletedata(el.id)}>delete item</Button>
    </div>
    </div>

   ))}
   <div style={{marginLeft:300,marginTop:20}}>
  <div>Total price : {totalpricelist}</div>

  <div><Button><Link to="/checkout">Go to checkout</Link></Button></div>
  </div> */}
 <div style={{height:"150px",marginTop:"100px",backgroundColor:"#0c98bb",padding:"30px",color:"white"}}>
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

export default Cartpage