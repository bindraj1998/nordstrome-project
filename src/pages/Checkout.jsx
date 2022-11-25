import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import styles from "./styles.module.css"
import Datepicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'
import { CalendarIcon, SearchIcon } from "@chakra-ui/icons";
const Checkout = () => {
    const {totalpricelist,user,emailset}=useContext(Context)
    // console.log(emailset)
    const [startdate,setstartdate]=useState()
    const onchangedate=(value)=>{
      setstartdate(value)
    }
  return (
    <div className={styles.box2}>
      
      <div>
      Total Price : ${totalpricelist}
      
      <p style={{fontStyle:"italic",textAlign:"start"}}>Name  :  {user.firstname}{user.lastname}
      </p>
     
      
       <p style={{fontStyle:"italic",textAlign:"start"}}> Email  : {"        "}{emailset}</p>
           <p style={{textAlign:"start"}}>Address : </p>
         <Input  placeholder='add...' style={{height:50,width:"60%",marginRight:170}} type="text"/>
          <p style={{textAlign:"start"}}>Pin :</p>
          <Input style={{textAlign:"start",width:"60%",marginRight:170}} type="number"/>
          <p style={{textAlign:"start"}}>mobile number :</p>
        
            <Input style={{textAlign:"start",width:"85%",marginRight:100,marginLeft:"30"}} type="number"/>
            </div>
            <div style={{backgroundColor:"#e7e9eb",width:"50%"}}>
              <p style={{textAlign:"start"}}>Cart Number* :</p>
              <Input type="number" placeholder='cart number' style={{border:"1px solid red"}}/>
              <div style={{display:"flex",justifyContent:"space-around"}}><div><p style={{textAlign:"start"}}>expiry date* :</p>
               
                <InputGroup> <InputRightElement
      pointerEvents='none'
      children={<CalendarIcon color='blue.300'  bottom="40%"/>}
    /> 
    <Datepicker style={{height:30}} selected={startdate} onChange={onchangedate} dateFormat=" dd MMM yyyy"/></InputGroup>
               {/* <Datepicker    selected={startdate} onChange={onchangedate} dateFormat=" dd MMM yyyy"/> */}
                  
              </div>
              
              <div > <p>CVV* :</p>
                <Input style={{color:"red",backgroundColor:"white",width:70}}  type="number" placeholder='cvv...'/></div></div>
                <p style={{textAlign:"start"}}>cart holder name* :</p>
              <Input type="text" style={{border:"1px solid red"}} placeholder='cart hol...'/>
              <Button style={{marginTop:30,width:"100%",backgroundColor:'gray',color:"skyblue"}}>Procced to pay </Button></div>
          {/* </div> */}
          {/* <Input style={{textAlign:"start",width:"60%",marginRight:150}} type="number"/> */}
           
    </div>
  )
}

export default Checkout