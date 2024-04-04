import React, { useState, useEffect } from "react";
import Setting from "../components/Setting";
import PinIcon from "../components/Icons/PinIcon";
import NextIcon from "../components/Icons/NextIcon";
import Switch from '@mui/material/Switch';
import LockCardIcon from "../components/Icons/LockCardIcon";
import ActiveCardIcon from "../components/Icons/ActiveCardIcon";
import AppTitles from "../components/AppTitles";
import Button from "../components/Button";
import BankCardSwiper from "../components/BankCardSwiper";


const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export const Mycard = (props) => {

    useEffect(() => {
        props.titleCallback("My Card")

    }, [])

    return (
        <div className="flex flex-col justify-center" style={{ width: '100%', height: '100%', marginBottom: '110px' }}>


            {/* BankCard */}


            <BankCardSwiper />

            {/* Card Status */}

            <div className="flex flex-row justify-center"
                style={{ width: '100%', height: '89px', marginTop: '3%', padding: '0 10% 0' }}>

                <div className="flex flex-col justify-center rounded-xl	"
                    style={{ width: '50%', backgroundColor: '#13C99926', paddingLeft: '15px', marginRight: '7px' }}>
                    <p style={{ color: '#13C999', fontSize: '14px' }}>Credit Limit</p>
                    <p className="usd" style={{ color: '#13C999', fontSize: '20px' }}>$271.00</p>
                </div>


                <div className="flex flex-col justify-center rounded-xl	"
                    style={{ width: '50%', backgroundColor: '#FF636326', paddingLeft: '15px', marginLeft: '7px' }}>
                    <p style={{ color: '#FF6363', fontSize: '14px' }}>Card Status</p>
                    <p style={{ color: '#FF6363', fontSize: '20px' }}>Active</p>
                </div>

            </div>


            {/* Settings */}


            <div style={{ width: '100%', marginTop: '30px' }}>
                <AppTitles title="Settings" />
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-5" style={{ padding: '0% 10% 0%' }}>

                <button className="w-full">
                    <Setting icon={<PinIcon />} title="Change Pin" secicon={<NextIcon />} />
                </button>
                <Setting icon={<LockCardIcon />} title="Lock Card" secicon={<Switch {...label} size="small" />} />
                <Setting icon={<ActiveCardIcon />} title="Deactivate Card" secicon={<Switch {...label} defaultChecked size="small" />} />
            </div>

            <button className="flex w-full mt-4" type="submit"> <Button title="Save" /> </button>
        </div>
    )
}

export default Mycard