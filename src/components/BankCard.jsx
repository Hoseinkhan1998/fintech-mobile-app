import React from 'react'
import Simcard from '../components/Icons/Simcard';
import card from '../pages/images/card.png';

export const BankCard = () => {
    return (
        <div className='w-full flex-col flex mt-5 '
            style={{
                backgroundColor: "#456EFE", height: "228px",
                display: "flex", borderRadius: '10px', marginRight: '20px', padding: '0% 5%'
            }}>
            <div className='flex flex-row justify-between w-full mt-7'>
                <p style={{ color: '#fff', fontSize: '14px', letterSpacing: '0.28px' }}> Available Balance </p>
                <Simcard />
            </div>
            <div style={{ marginTop: '-8px' }}>
                <p className='cash' style={{ color: '#fff', fontSize: '28px' }}>$4,228</p>
            </div>
            <div className='w-full flex flex-row mt-4'>
                <div className='flex mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="6" viewBox="0 0 37 6" fill="none">
                        <circle cx="3.59039" cy="2.93023" r="2.93023" fill="white" />
                        <circle cx="13.6373" cy="2.93023" r="2.93023" fill="white" />
                        <circle cx="23.6832" cy="2.93023" r="2.93023" fill="white" />
                        <circle cx="33.73" cy="2.93023" r="2.93023" fill="white" />
                    </svg>
                </div>
                <div className='flex mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="6" viewBox="0 0 37 6" fill="none">
                        <circle cx="3.59039" cy="2.93023" r="2.93023" fill="white" />
                        <circle cx="13.6373" cy="2.93023" r="2.93023" fill="white" />
                        <circle cx="23.6832" cy="2.93023" r="2.93023" fill="white" />
                        <circle cx="33.73" cy="2.93023" r="2.93023" fill="white" />
                    </svg>
                </div>
                <div className='flex mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="6" viewBox="0 0 37 6" fill="none">
                        <circle cx="3.59039" cy="2.93023" r="2.93023" fill="white" />
                        <circle cx="13.6373" cy="2.93023" r="2.93023" fill="white" />
                        <circle cx="23.6832" cy="2.93023" r="2.93023" fill="white" />
                        <circle cx="33.73" cy="2.93023" r="2.93023" fill="white" />
                    </svg>
                </div>
                <p style={{ color: '#fff', fontSize: '19px', marginTop: '-10px' }}>8635</p>
            </div>
            <div className='flex w-full flex-row mt-2'>
                <p style={{ color: '#fff', fontSize: '12px', marginRight: '38px' }}>Valid From 10/25</p>
                <p style={{ color: '#fff', fontSize: '12px' }}>Valid Thru 10/30</p>
            </div>
            <div className='w-full flex flex-row items-center justify-between mt-2'>
                <div className='flex flex-col'>
                    <p style={{ fontSize: '12px', color: '#fff', marginBottom: '-4px' }}>Card Holder</p>
                    <p style={{ fontSize: '18px', color: '#fff' }}>Will Jonas</p>
                </div>
                <div>
                    <img src={card} />
                </div>
            </div>
        </div>
    )
}

export default BankCard