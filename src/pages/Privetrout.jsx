import React from 'react'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

const Privetrout = ({children}) => {

      const {user}=useContext(Context)
    //   const navigate=useNavigate()

      if(user.firstname){
        return (children)
      }

else{
    return (<Navigate to="/signin"/>)
}
}

export default Privetrout