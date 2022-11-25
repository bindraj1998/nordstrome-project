import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
 import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Event from './pages/Event';
import Women from './pages/Women';
import Signin from './pages/Signin';
import Signdata from './pages/Signdata';
import Setsize from './pages/Setsize';
import Cartpage from './pages/Cartpage';
import Checkout from './pages/Checkout';
import Privetrout from './pages/Privetrout';
import Newtoflash from './pages/Newtoflash';
import Sunglass from './pages/Sunglass';
import Shos from './pages/Shos';
import Shirts from './pages/Shirts';
import Sandle from './pages/Sandle';
import Activewear from './pages/Activewear';
import Bages from './pages/Bages';
import Beauty from './pages/Beauty';
import Mens from './pages/Mens';
import Pagenot from './pages/Pagenot';
import Kides from './pages/Kides';

function App() {
  return (                                                                                                
    <div className="App">
     <Footer/>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/clearance" element={<Home/>}></Route>
      <Route path="/men" element={<Mens/>}></Route>
      <Route path="/event" element={<Event/>}></Route>
      <Route path="/women" element={<Women/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signinfinal" element={<Signdata/>}></Route>
        <Route path="/sandle" element={<Sandle/>}></Route>
      <Route path="/setsize" element={<Setsize/>}></Route>
      <Route path="/cartpage" element={<Cartpage/>}></Route>
      <Route path="/checkout" element={<Privetrout><Checkout/></Privetrout>}></Route>
      <Route path="/newtoflash" element={<Newtoflash/>}></Route>
      <Route path="/sunglass" element={<Sunglass/>}></Route>
      <Route path="/shos" element={<Shos/>}></Route>
      <Route path="/shirt" element={<Shirts/>}></Route>
      <Route path="/activewear" element={<Activewear/>}></Route>
      <Route path="/bags" element={<Bages/>}></Route>
      <Route path="/beauty" element={<Beauty/>}></Route>
      <Route path="/*" element={<Pagenot/>}></Route>
      <Route path="/kids" element={<Kides/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
