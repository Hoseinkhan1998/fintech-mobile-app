import React, { useState, useEffect } from "react";
import Notification from '../components/Icons/Notification';
import Profilebtn from "./Profilebtn";
import Backbtn from "./Backbtn";

export const Header = ({ title, icon }) => {

    return (
        <div className='flex flex-row items-center justify-between text-center' style={{ margin: "5% 10% 0%", }}>
            
                    {icon === 'true' ? <Profilebtn /> : <Backbtn/> }
            <p style={{ color: '#23303B', fontSize: '26px', width: '70%' }}>{title}</p>
            <div style={{ cursor: 'pointer' }}><Notification /></div>
        </div>
    )
}

export default Header