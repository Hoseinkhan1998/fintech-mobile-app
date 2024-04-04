import './App.css';
import React from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login";
import  First  from './components/First';
import { Signup } from "./pages/Signup";
import NavigationButton from './components/NavigationButton';
import  Dashboard  from "./pages/Dashboard";
import  Location  from "./pages/Location";
import  Scan  from "./pages/Scan";
import  Charts  from "./pages/Charts";
import  Apps  from "./pages/Apps";
import Header from './components/Header';
import  Profile  from "./pages/Profile";
import Mycard from './pages/Mycard';
import MoneyTransfer from './pages/MoneyTransfer';
import PayBill from './pages/PayBill';
import BankTransfer from './pages/BankTransfer';
import MobileNumber from './pages/MobileNumber';
import OTP from './pages/OTP';


function App() {

  const [title, setTitle] = useState("")
  const [backicon, setBackicon] = useState("")

  return (
    <div>
      <Header title={title} icon={backicon} />
        <Routes>
          <Route path="/login" element={<Login titleCallback={setTitle} iconbtn={setBackicon}/>} />
          <Route path="/first" element={<First titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/signup" element={<Signup titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/" element={<Dashboard titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/mycard" element={<Mycard titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/location" element={<Location titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/scan" element={<Scan titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/charts" element={<Charts titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/apps" element={<Apps titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/profile" element={<Profile titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/moneytransfer" element={<MoneyTransfer titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/paybill" element={<PayBill titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/banktransfer" element={<BankTransfer titleCallback={setTitle} iconbtn={setBackicon} />} />
          <Route path="/mobilenumber" element={<MobileNumber titleCallback={setTitle} iconbtn={setBackicon} />} />   
          <Route path="/otp" element={<OTP titleCallback={setTitle} iconbtn={setBackicon}/>} />
        </Routes>
      <NavigationButton />
    </div>
  );
}

export default App;
