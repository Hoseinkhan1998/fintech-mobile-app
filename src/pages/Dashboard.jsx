import React, { useState, useEffect } from "react";
import QuickActions from "../components/QuickActions";
import Services from "../components/Services";
import money from './images/money.png';
import Paybil from './images/Paybil.png';
import Recharge from '../components/Icons/Recharge';
import CharityIcon from '../components/Icons/CharityIcon';
import LoanIcon from '../components/Icons/LoanIcon';
import GiftsIcon from '../components/Icons/GiftsIcon';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Bank from './images/Bank.png';
import netflix from './images/netflix.png';
import paypal from './images/paypal.png';
import spotify from './images/spotify.png';
import Payments from "../components/Payments";
import AppTitles from "../components/AppTitles";
import BankCardSwiper from "../components/BankCardSwiper";





export const Dashboard = (props) => {
  

  useEffect(() => {
    props.titleCallback("Fintech")
    props.iconbtn('true')
  }, [])

  return (
    <div className="flex flex-col" style={{ width: '100%', height: '100%', marginBottom: '93px' }}>


      {/* BankCard */}

    <BankCardSwiper />

      <div className=" flex items-center" style={{ width: '100%', marginTop: '15px', paddingLeft: '10%' }}>
        <p style={{ color: '#23303B', fontSize: '20px' }}>Quick Actions</p>
      </div>

      {/* Quick Actions */}



      <div className="flex items-center w-full pt-9 pb-9 [&::-webkit-scrollbar]:hidden"
        style={{ paddingLeft: '10%', overflowY: 'hidden', overflowX: 'auto', scrollBehavior: 'smooth' }}>
        <QuickActions icon={money} title='Money Transfer' url='/moneytransfer' />
        <QuickActions icon={Paybil} title='Pay Bill' url='/paybill' />
        <QuickActions icon={Bank} title='Bank to Bank' url='/banktransfer' />
        <QuickActions icon={Bank} title='Bank to Bank' url='/banktransfer' />
        <QuickActions icon={Bank} title='Bank to Bank' url='/banktransfer' />
        <QuickActions icon={Bank} title='Bank to Bank' url='/banktransfer' />
      </div>


      {/* Services */}


      <div style={{ width: '100%' }}>
        <AppTitles title="Services" />
      </div>


      <div className="flex items-center w-full [&::-webkit-scrollbar]:hidden"
        style={{ paddingLeft: '10%', marginTop: '10px', overflowY: 'hidden', overflowX: 'auto', scrollBehavior: 'smooth' }}>
        <Services title="Recharge" url='/recharge' icon={<Recharge />} />
        <Services title="Charity" url='/charity' icon={<CharityIcon />} />
        <Services title="Loan" url='/loan' icon={<LoanIcon />} />
        <Services title="Gifts" url='/gifts' icon={<GiftsIcon />} />
        <Services title="Insurance" url='/insurance' icon={<BeachAccessIcon />} />
      </div>



      {/* Schedule Payments */}

      {/* <div className=" flex items-center" style={{ width: '100%', marginTop: '30px', paddingLeft: '10%' }}>
        <p style={{ color: '#23303B', fontSize: '20px' }}>Schedule Payments</p>
        <button onClick={() => { }} style={{ color: "#A4A9AE", fontSize: '14px', marginLeft: '33%' }}>View All</button>
      </div> */}

      <div className="w-full items-center justify-between flex flex-row " style={{ paddingRight: '30px', marginTop: '30px' }}>
        <AppTitles title="Schedule Payments" />
        <div className="w-full flex justify-end">
          <button onClick={() => { }} style={{ color: "#A4A9AE", fontSize: '14px' }}>View All</button>
        </div>
      </div>




      <div className="flex flex-col items-center w-full" style={{ padding: '0% 10%' }}>

        <Payments icon={netflix} title="Netflix" date="12/04" price="1.00" />
        <Payments icon={paypal} title="Paypal" date="14/04" price="3.50" />
        <Payments icon={spotify} title="Spotify" date="13/04" price="10.00" />
      </div>
    </div>
  )

}

export default Dashboard