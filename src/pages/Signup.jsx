import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useState } from 'react';




export const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();


    };



    return (
        <>
            {/* text & inputs */}


            <div id="outer-circle">
                <div style={{ width: '100%', marginTop: '45%' }} className="flex flex-col items-center justify-center text-center">
                    <div style={{ color: "#FFFFFF", fontSize: '30px', marginBottom: '20px' }}>Create Your Account</div>
                    <TextField
                        placeholder='Name'
                        sx={{
                            background: '#fff', borderRadius: '10px', fontSize: '16px', width: '100%',
                            border: 'none', display: 'flex', marginBottom: '15px',
                        }}
                        InputProps={{ sx: { height: 63 } }} />
                    <TextField
                        placeholder='Email'
                        sx={{
                            background: '#fff', borderRadius: '10px', fontSize: '16px', width: '100%',
                            border: 'none', display: 'flex', marginBottom: '15px',
                        }}

                        InputProps={{ sx: { height: 63 } }} />
                    <TextField
                        placeholder='Mobile Number'
                        sx={{
                            background: '#fff', borderRadius: '10px', fontSize: '16px', width: '100%',
                            border: 'none', display: 'flex', marginBottom: '15px',
                        }}

                        InputProps={{ sx: { height: 63 } }} />
                    <TextField
                        placeholder='CNIC'
                        sx={{
                            background: '#fff', borderRadius: '10px', fontSize: '16px', width: '100%',
                            border: 'none', display: 'flex', marginBottom: '15px',
                        }}
                        InputProps={{ sx: { height: 63 } }} />


                    {/* password % fingerprint */}


                    <div style={{ width: '100%' }} className='flex flex-row'>
                        <FormControl sx={{
                            background: '#fff', borderRadius: '10px', width: '75%',
                             display: 'flex',
                        }}
                            size="small"
                        >
                            <OutlinedInput
                            sx={{ height: '63px'}}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="password"
                            />
                        </FormControl>
                        <FingerprintIcon style={{
                            backgroundColor: '#fff', borderRadius: '10px',
                            marginLeft: '12px', width: '23%', height: '63px', padding: '5px'
                        }} />
                    </div>


                    {/* CheckBox */}


                    <div style={{ width: '100%', marginTop: '10px' }} className='flex flex-row items-center justify-start text-center'>
                        <input type='checkbox' checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            style={{ width: '18px', cursor: 'pointer', marginRight: '10px', minHeight: '17px' }} />
                        <p style={{ color: '#fff', fontSize: '15px', }}>I agree with <span style={{ color: '#456EFE' }}>Terms & Conditions</span></p>
                    </div>


                    {/* Submit  */}



                    <button class="button" id="submit" disabled={!isChecked}>Sign Up</button>
                    <div style={{ width: '100%', color: '#8E949A', marginTop: '18px' }} className='flex flex-row items-center justify-center text-center'>
                        <p style={{ fontSize: '18px' }}>Dont have an account? <a className='font-semibold text-white' href='/login'>Log In</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup








