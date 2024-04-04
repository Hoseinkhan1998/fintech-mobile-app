import React from 'react'
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Charts from './Icons/Charts';
import Home from './Icons/Home';
import Location from './Icons/Location';
import Scan from './Icons/Scan';
import Apps from './Icons/Apps';


const NavigationButton = () => {
    const [value, setValue] = useState(window.location.pathname);
    return (
        <BottomNavigation
            sx={{
                boxShadow: ' 0px 11px 44px 19px rgba(0, 0, 0, 0.10)',
                position: 'fixed', bottom: 0, left: 0, right: 0,
                "& .Mui-selected, .Mui-selected > svg > path": {
                    stroke: "#466EFA"
                }, height: '93px'
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                window.location = newValue;
                setValue(newValue)


            }}
        >
            <BottomNavigationAction value="/" icon={<Home />} />
            <BottomNavigationAction value="/location" icon={<Location />} />
            <BottomNavigationAction value="/scan" icon={<Scan />} />
            <BottomNavigationAction value="/charts" icon={<Charts />} />
            <BottomNavigationAction value="/apps" icon={<Apps />} />
        </BottomNavigation>
    )
}

export default NavigationButton