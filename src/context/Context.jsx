import React from "react"
import { useState } from "react"
import { createContext } from "react"
export const Context=createContext()

export const Contextprovider=({children})=>{

   

 const [data,setdata]=useState([]) 
   const finale=(d)=>{
    setdata([...data,d])
   }
   const totalprice=()=>{

    if(data.length!==0){

    
    return data.reduce((acc,c)=>Number(acc)+Number(c.quntity),0)
    }
    else{
        return 0
    } 
}

const totalpricefinal=()=>{
     return data.reduce((acc,c)=>Number(acc)+Number(c.price.slice(1,3)*Number(c.quntity)),0)
}
    const totalpricelist=totalpricefinal()
const  totalpriceitem=totalprice()
const deletedata=(id)=>{
    let newdata=data.filter((dat)=>dat.id!==id)
    setdata(newdata)
}
const [emailset,setemail]=useState({})
const [user,setuser]=useState({})
const email=(data)=>{
      setemail(data)
}
const completeform=(data)=>{
     setuser(data)
}
const [size1,setsize]=useState({})
const product =(el)=>{
setsize(el)
}

    return <Context.Provider value={{product,size1,finale,data,totalpriceitem,deletedata,totalpricelist,email,emailset,completeform,user}}>{children}</Context.Provider>
}