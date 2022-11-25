import { Button, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react'
import {ChevronDownIcon, LockIcon, PhoneIcon, SearchIcon} from "@chakra-ui/icons"
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { Context } from '../context/Context'
import { useEffect } from 'react'
const Footer = () => {

  const {data,totalpriceitem,user}=useContext(Context)
  // 


    // const handle=()=>{
    //   alert("no product found")
    // }
 
  
  return (
    <div>
        <div style={{background:"#00819d",color:"white",height:"30px",marginTop:'-45px'}}>
            <p>Free shipping over $89, or shop online and pick up select orders at a Nordstrom Rack or Nordstrom store. Learn More</p>
        </div>

         <div style={{display:"flex",justifyContent:"space-between",margin:'30px'}}>
            <div  ><img width="80px" background="white" src="data:image/png;base64,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"/></div>
            <div style={{width:"60%"}}><Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon  color='gray.300' />}
    />
    <Input type='text' placeholder='Search for products or brands' />
    {/* <button onClick={handle}><Input type='text' placeholder='Search for products or brands' onChange={(e)=>setinput(e.target.value)} /></button> */}
  </InputGroup>
  </Stack>
</div>
            <div style={{gap:"20px",display:"flex"}}>
            <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    {user.firstname==undefined?" Sign in":<div> Hi,{user.firstname}</div>}
   
  </MenuButton>
  {/* <MenuList></MenuList> */}
  <MenuList>
    <MenuItem bg="blue.100" ml="5px" mr="5px" style={{width:"95%"}}>{user.firstname==undefined?<Link to="/signin">Sign In | Create Accounts </Link>:<div>{user.firstname} Account</div>}</MenuItem>
    <MenuItem  color="black" fontWeight="bold">Your Account</MenuItem>
    <MenuItem><Link to="/cartpage">Purchases</Link></MenuItem>
    <MenuItem>Wish List</MenuItem>
    <MenuItem>The Nordy Club Rewards</MenuItem>
    <MenuItem>Shipping Addresses</MenuItem>
    <MenuItem>Payment Methods</MenuItem>

  </MenuList>
</Menu> 
 
  <Link to="/cartpage"><LockIcon/> {totalpriceitem}</Link>
            </div>
         </div>
        <div style={{borderBottom:"0.5px solid gray"}}></div>
    </div>
  )
}

export default Footer