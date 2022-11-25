import { Button, Heading, Input, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

const Signin = () => {
    const [email1,setemail]=useState("")
    console.log(email1)
     const {email}=useContext(Context)
     const emailset=useRef()
    const navigate=useNavigate()
    const handleclick=(e)=>{
      e.preventDefault()
        if(email1===""){
          emailset.current.focus()
        }
        else{

        
        navigate("/signinfinal")
         email(email1)
        // localStorage.setItem("data",JSON.stringify(email))
        setemail("")
       
        } 


    }
    // const set=(e)=>{
    //   let {name,value}=e.target
    //   setemail({[name]:value})
    // }
  return (
    <div style={{width:"30%" ,margin:"auto",textAlign:'start',marginTop:"40px",padding:"5px"}}>
          <Heading size='md' fontWeight="normal">Sign In | Create Account</Heading>
        
        <Text fontSize='xs'>Enter your email to get started.</Text>
        
        <Text fontSize="sm">Email </Text>
        <form onSubmit={handleclick}>
       <Input ref={emailset} type="email"  name="email"  onChange={(e)=>setemail(e.target.value)}/>
       <Button width="100%" mt="5" type="submit">NEXT</Button>
       </form>
    </div>
  )
}

export default Signin