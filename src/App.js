import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import ConsultantProfile from "./pages/ConsultantProfile";
import CustomerProfile from "./pages/CustomerProfile";
import Test from "./components/test";
import AddUserDetails from "./pages/AddUserDetails";
import UpdateUserDetails from "./pages/UpdateUserDetails";
import Login from "./components/Login/Login";
import ConsultantRegister from "./components/Register/Consultant/ConsulantRegister";
import CustomerRegitser from "./components/Register/Customer/CustomerRegister";
import Consultantfilter from "./components/Filter/Consultantfilter";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/ConsultantProfile" element={<ConsultantProfile/>} />
      <Route path="/CustomerProfile" element={<CustomerProfile/>} />
      <Route path="/AddUserDetails/:email" element={<AddUserDetails/>} />
      <Route path="/UpdateUserDetails" element={<UpdateUserDetails/>} />
      <Route path="/Test" element={<Test/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/reg_customer" element={<CustomerRegitser/>} />
      <Route path="/reg_cunsultant" element={<ConsultantRegister/>} />
      <Route path="/Consultantfilter" element={<Consultantfilter/>} />
    </Routes>
    </>
  );
}

export default App;
