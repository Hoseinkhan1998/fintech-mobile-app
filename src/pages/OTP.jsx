import React, { useState, useEffect } from "react";
import OtpIcon from "../components/Icons/OtpIcon";
import VerificationInput from "react-verification-input";
import Button from "../components/Button";
import CloseIcon from '@mui/icons-material/Close';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useParams } from 'react-router-dom';



const OTP = (props) => {

    const { valueParam } = useParams();


    const [pin, setPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');

    const handlePinChange = (value) => {
        setPin(value);
    };

    const handleConfirmPinChange = (value) => {
        setConfirmPin(value, () => {
            if (pin !== confirmPin) {
                console.log('PINs do not match.');
                return;
            } else {
                console.log('PINs match.');
            }
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();


    };



    const [state, setState] = React.useState({ bottom: false });

    const toggleDrawer = (side, open) => event =>
        setState({ ...state, [side]: open });




    useEffect(() => {
        props.titleCallback("OTP Verification")
        props.iconbtn('false')
    }, []);


    return (
        <div className="flex flex-col justify-center items-center" style={{ width: '100%', height: '100%' }}>
            <div className="flex justify-center items-center mt-20"
                style={{ width: '138px', height: '138px', backgroundColor: '#456EFE', borderRadius: '50%', }}>
                <OtpIcon />
            </div>
            <div className="flex mt-4">
                <p style={{ fontSize: '32px', color: '#23303B' }}>OTP</p>
            </div>
            <div className="text-center" style={{ width: '65%', fontSize: '18px', color: '#A4A9AE' }}>
                <p>Please enter the OTP send to your mobile number <span style={{ color: '#456EFE' }}>{valueParam}</span></p>
            </div>
            <div style={{ marginTop: '18%' }}>
                <VerificationInput
                    // value={code} onChange={handleChange}
                    validChars="0-9" inputProps={{ inputMode: "numeric" }}
                    passwordMode={true}
                    length={4}
                    classNames={{ character: "character" }}
                    placeholder=""

                />
            </div>
            <div style={{ marginTop: '18%' }}>
                <p style={{ color: '#A4A9AE', fontSize: '16px' }}>Don’t receive an OTP?</p>
            </div>
            <button>
                <p style={{ textDecorationLine: 'underline', color: '#23303B', fontSize: '18px' }}>Resend OTP</p>
            </button>

            <button className="flex w-full" style={{ marginTop: '20px' }} onClick={toggleDrawer('bottom', true)}> <Button title="Next" /> </button>

            <div className="w-full" style={{ marginBottom: '100px' }}>

                <SwipeableDrawer
                    sx={{ borderRadius: '50px' }}
                    anchor="bottom"
                    open={state.bottom}
                    onClose={toggleDrawer('bottom', false)}
                    onOpen={toggleDrawer('bottom', true)}
                    PaperProps={{ elevation: 0, style: { borderRadius: '20px 20px 0px 0px' } }}

                >
                    <div className="flex w-full absolute">
                        <button onClick={toggleDrawer('bottom', false)}
                            className="flex" style={{ color: '#23303B', marginTop: '10px', marginLeft: 'auto', marginRight: '10px' }}
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    <div style={{ marginTop: '10%', marginLeft: '50px' }}>
                        <p style={{ color: '#23303B', fontSize: '19px', marginBottom: '17px' }}>Enter New Pin</p>
                        <VerificationInput
                            validChars="0-9" inputProps={{ inputMode: "numeric" }}
                            passwordMode={true}
                            length={5}
                            classNames={{ container: "container", character: "character" }}
                            placeholder=""
                            value={pin}
                            onChange={handlePinChange}
                        />
                    </div>

                    <div style={{ marginTop: '8%', marginBottom: '8%', marginLeft: '50px' }}>
                        <p style={{ color: '#23303B', fontSize: '19px', marginBottom: '17px' }}>Confirm Pin Code</p>
                        <VerificationInput
                            removeDefaultStyles
                            validChars="0-9" inputProps={{ inputMode: "numeric" }}
                            passwordMode={true}
                            length={5}
                            classNames={{ container: "container", character: "character" }}
                            placeholder=""
                            value={confirmPin}
                            onChange={handleConfirmPinChange}
                        />
                        <p style={{ color: '#23303B', fontSize: '19px', marginTop: '17px' }}>Your PIN codes are the same</p>
                    </div>
                    <button className="flex w-full" style={{ marginBottom: '30px' }} type="submit" onClick={handleSubmit}> <Button title="Done" /> </button>
                </SwipeableDrawer>
            </div>


        </div>
    )
}

export default OTP