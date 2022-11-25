import { Button, Heading, Input, Select} from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../context/Context'
const Setsize = () => {
    const {finale,size1}=useContext(Context)

    const [setcart,settocart]=useState([])

    // const {id}=useParams()
    const [item,setitem]=useState(size1)
   const [final,setfinal]=useState({})
//    console.log(item)
    // useEffect(()=>{
    //    fetch(`http://localhost:8080/product/${id}`).then((res)=>res.json()).then((res)=>{
    //     setitem(res)
    //    })
    
    // },[id])


    const size=useRef()
    const color=useRef()
    const quntity=useRef()
    const handlechange=(e)=>{
    let {name,value}=e.target

      setitem({...item,[name]:value}) 

    }
    const handlebutton=(e)=>{
        e.preventDefault()
       

         
      if(!item.size){
        size.current.focus()
      }
    // }
      if(!item.color){
        color.current.focus()
      }
      if(!item.quntity){
        quntity.current.focus()
      }
        console.log(item)
        
        if(!item.color || !item.quntity || !item.size ){
          alert("fill the data")
        }
        else{
          finale(item)
        }

        // alert("Item added to cart successfully")
    }
    
  return (
    <div> 

       {/* {item.map((data)=>( */}
         <div style={{display:"flex",border:'1px solid gray',marginLeft:40,marginRight:40}}>
        <div style={{display:'flex'}}>
        <img  style={{width:250,backgroundColor:"box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}} src={item.url}/> 
        </div>
        <div style={{marginLeft:150}}>
        <p style={{fontSize:20}}> Title: {item.title}</p>
        <p> Name: {item.name}</p>
           <p> Price :{item.price}</p>
           <p style={{textDecorationLine:'line-through'}}> Discount :{item.dis}</p>

           <form onSubmit={handlebutton}>

        
           <Select  ref={color} style={{width:300,marginTop:30}} name="color" onChange={handlechange}>
            <option>Select Color</option>
                <option value="white">white</option>
                <option value="black">black</option>
                <option value="blue">blue</option>
                <option value="grean">grean</option>

            </Select>
            <div>
        
                <Select ref={size} style={{width:300,marginTop:20}} name="size" onChange={handlechange}>
                <option>Select Size</option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
                <option value="xxl">xxl</option>

            </Select>
            
            </div>
            <div>
            <Select ref={quntity} style={{width:300,marginTop:20}} name="quntity" onChange={handlechange}>
                <option>Select Quntity</option>
                <option value={1}>1</option>
                <option value={1}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>

            </Select>
            
            </div>
            <Button  style={{width:300,color:"green",backgroundColor:"gray",marginTop:40}} type="submit">add to cart</Button>

           </form>
          </div>
          
         
  
        </div>
    
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

export default Setsize