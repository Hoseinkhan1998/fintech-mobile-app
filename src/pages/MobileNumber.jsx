import React, { useState, useEffect } from "react";
import MobileNumberIcon from "../components/Icons/MobileNumberIcon";
import { MuiTelInput } from 'mui-tel-input';
import Button from "../components/Button";
import { Link } from 'react-router-dom';



const MobileNumber = (props) => {

    const [phone, setPhone] = React.useState('')

    const handleChange = (newPhone) => {
        setPhone(newPhone)
    }


    useEffect(() => {
        props.titleCallback("Mobile Number")
    }, [])

    return (
        <div className="flex flex-col justify-center items-center" style={{ width: '100%', height: '100%', marginBottom: '110px' }}>
            <div className="flex justify-center items-center mt-20"
                style={{ width: '138px', height: '138px', backgroundColor: '#456EFE', borderRadius: '50%', }}>
                <MobileNumberIcon />
            </div>
            <div className="flex mt-4">
                <p style={{ fontSize: '32px', color: '#23303B' }}>Mobile Number</p>
            </div>
            <div className="text-center" style={{ width: '65%', fontSize: '18px', color: '#A4A9AE' }}>
                <p>We need to send OTP to authenticate
                    your number to change your pin</p>
            </div>
            <div className="flex flex-col w-3/4 mt-16">
                <p style={{ fontSize: '18px', color: '#A4A9AE', }}>Mobile Number</p>
                <MuiTelInput InputProps={{
                    sx: {
                        height: 65, borderRadius: 3,
                        background: "rgba(255, 255, 255, 0.15)",
                        boxShadow: '-4px 4px 48px -11px rgba(69, 110, 254, 0.10)'
                    }
                }} value={phone} onChange={handleChange} />
                <Link to={`/otp/${phone}`}> go fuck</Link>
            </div>
            <button className="flex w-full" style={{ marginTop: '36%'}} onClick={() => {}}> <Button title="Next" /> </button>
        </div>
    )
}

export default MobileNumber