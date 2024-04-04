import React from 'react'

const RecentTransfers = ({ icon, name, amount }) => {
    return (
        <button className="flex flex-col items-center justify-center"
            style={{
                minWidth: '112px', height: '122px', borderRadius: '10px',
                boxShadow: '1px 5px 40px 8px rgba(110, 117, 136, 0.07)', background: '#fff', marginRight: '10px'
            }}
            onClick={() => { }}>

            <img src={icon} style={{ marginBottom: '8px' }} />
            <p style={{ color: '#A4A9AE', fontSize: '13px' }}>{name}</p>
            <p className="usd" style={{ color: '#23303B', fontSize: '16px' }}>$ {amount}</p>
        </button>
    )
}

export default RecentTransfers