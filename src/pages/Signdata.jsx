import { Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate ,Link} from 'react-router-dom'
import { Context } from '../context/Context'

const Signdata = () => {
    
    const navigate=useNavigate()
      const [formdetail,setformdetails]=useState({})
        const {emailset,completeform}=useContext(Context)
         const pass=useRef()
         const firstname=useRef()
         const lastname=useRef()
       const form=(e)=>{
     let {name,value}=e.target
        setformdetails({...formdetail,[name]:value})

       }

       const handleform=(e)=>{
        e.preventDefault()
        completeform(formdetail)
         

         if(!formdetail.password){
          pass.current.focus()
         }
         if(!formdetail.lastname){
          lastname.current.focus()
         }
         if(!formdetail.firstname){
          firstname.current.focus()
         }
          if(!formdetail.firstname || !formdetail.lastname ||  !formdetail.password){
            alert("fill the required data")
          }
          else{
            alert("successfull")
            navigate("/")
          }

        


       }
        
  return (
    <div style={{textAlign:"start",width:"30%",margin:"auto",marginBottom:"30px"}}>
      <Text>Email</Text>
      <div style={{display:"flex",gap:"30px"}}>
    <p>{emailset}</p>
   
    <Text as='u'> <Link  to="/signin">edit email</Link></Text>
    </div>
    <br/>
    <form onSubmit={handleform}>
    <Text>first name *</Text>
    <Input ref={firstname} name="firstname" type="text" onChange={form}/>
    <br/>
    <text>last name *</text>
<Input ref={lastname} name="lastname" type="text" onChange={form}/>
<br/>
<Text>create password</Text>
<Input ref={pass} name="password" type="number" onChange={form}/>
<br/>
<br/>
<Button width="100%" type="submit">create account</Button>
</form>
    </div>
  )
}

export default Signdata