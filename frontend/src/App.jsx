import { Route } from "react-router"
import { Routes } from "react-router"
import Home from "./pages/Home"
import Doctors from "./pages/Doctors"
import About from "./pages/About"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Myappointments from "./pages/Myappointments"
import Myprofile from "./pages/Myprofile"
import Appointment from "./pages/Appointment"
import Navbar from "./Components/Navbar"
const App=()=>{
  return(
    <div>
   
<div className="mx-4 sm:mx-[10%]">
     <Navbar/> 
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/doctors" element={<Doctors/>}></Route>
  <Route path="/doctors/:speciality" element={<Doctors/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
   <Route path="/about" element={<About/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/my-profile" element={<Myprofile/>}></Route>
      <Route path="/my-appointment" element={<Myappointments/>}></Route>
       <Route path="/appointment/:docId" element={<Appointment/>}></Route>
</Routes>
</div>
    </div>
  )
}
export default App
