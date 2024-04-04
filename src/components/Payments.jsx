import React from 'react';


export const Payments = ({ icon, title, date, price }) => {
    return (
        
        <button className="flex flex-row items-center rounded-xl" style={{ width: '100%',height: '81px',marginBottom: '10px', boxShadow: '1px 5px 40px 8px rgba(110, 117, 136, 0.07)' }} onClick={() => { }} >
            <img src={icon} />
            <div className="flex float-left" style={{ marginLeft: '15px' }}>
                <p> <span className="float-left" style={{ color: '#23303B' }}>{title}</span>
                    <br />
                    <span style={{ color: '#B4B2C8', fontSize: '14px' }}>Next Payment: </span>
                    <span style={{ color: '#456EFE', fontSize: '14px' }}>{date}</span></p>
            </div>
            <div>
                <p className="usd" style={{ marginLeft: '100%', fontSize: '20px' }}>${price}</p>
            </div>
        </button>
        
    )
}

export default Payments