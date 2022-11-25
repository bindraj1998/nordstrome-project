import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",margin:"20px"}}>
<Link to="/">Home</Link>
<Link to="/women">Women</Link>
<Link to="/men">Men</Link>
<Link to="/kids">Kids</Link>
<Link to="/shos">Shoes</Link>
<Link to="/activewear">Activewear</Link>
<Link to="/clearance">Clearance</Link>

<Link to="/bags">Bags  Accessories</Link>

<Link to="/beauty">Beauty</Link>
{/* <Link to="/gifts">Gifts</Link> */}


    </div>
  )
}

export default Navbar