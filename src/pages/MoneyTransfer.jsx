import React, { useState, useEffect } from "react";
import SearchIcon from "../components/Icons/SearchIcon";
import AppTitles from "../components/AppTitles";
import user1 from './images/user1.png'
import user2 from './images/user2.png'
import user3 from './images/user3.png'
import RecentTransfers from "../components/RecentTransfers";
import InputsApp from "../components/InputsApp";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import Button from "../components/Button";





const MoneyTransfer = (props) => {

  const [showPassword, setShowPassword] = React.useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();


  };

  useEffect(() => {
    props.titleCallback("Money Transfer")
    props.iconbtn('false')
  }, []);


  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center" style={{ width: '100%', height: '100%', marginBottom: '130px' }}>

      {/* SearchBar */}

      <div className="relative flex items-center justify-center" style={{ padding: '0% 10%', width: '100%', marginTop: '8%' }}>
        <span className="flex absolute items-center justify-start" style={{ left: '18%' }}> <SearchIcon /> </span>
        <input className="plinut" style={{ width: '100%', height: '48px', paddingLeft: '20%', background: 'rgba(164, 169, 174, 0.15)' }}
          type="search"
          placeholder="Search"
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      <div className="w-full mt-4">
        <AppTitles title='Recent transfers' />
      </div>

      
        <div className="flex items-center flex-row mt-6 [&::-webkit-scrollbar]:hidden"
          style={{  paddingLeft: '10%',width: '100%', overflowY: 'hidden', overflowX: 'auto', scrollBehavior: 'smooth' }}>
          <RecentTransfers icon={user1} name='Dr. Kamal' amount='40.00' />
          <RecentTransfers icon={user2} name='Jonathan' amount='40.00' />
          <RecentTransfers icon={user3} name='Will Hopper' amount='40.00' />
          <RecentTransfers icon={user3} name='Will Hopper' amount='40.00' />
          <RecentTransfers icon={user3} name='Will Hopper' amount='40.00' />
          <RecentTransfers icon={user3} name='Will Hopper' amount='40.00' />
          {/* <RecentTransfers icon={user1} name='Dr. Kamal' amount='40.00' /> */}
        </div>
      

      <div className="w-full mt-4">
        <AppTitles title='Make new transfer' />
      </div>

      <div style={{ padding: '0% 10%' }} className=" w-full flex flex-col justify-center items-center">
        <InputsApp pholder='Name' />
        <InputsApp pholder='Enter Account Number' />
        <InputsApp pholder='Reciever’s Mobile Number' />
        <InputsApp pholder='Purpose of payment (Optional)' />
        <div style={{ width: '100%' }} className='flex flex-row'>
          <FormControl sx={{
            background: '#fff', borderRadius: '10px', width: '75%',
            display: 'flex',
          }}
            size="small"
          >
            <OutlinedInput
              sx={{ height: '60px', background: 'rgba(164, 169, 174, 0.15)' }}
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
            backgroundColor: 'rgba(164, 169, 174, 0.15)', borderRadius: '10px',
            marginLeft: '12px', width: '23%', height: '63px', padding: '5px'
          }} />
        </div>
      </div>
      <button className="flex w-full" style={{ marginTop: '10%' }} onClick={() => { }}> <Button title="Continue" /> </button>
    </div>
  );
};

export default MoneyTransfer