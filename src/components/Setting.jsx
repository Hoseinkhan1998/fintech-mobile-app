import React from 'react';


export const Setting = ({icon, title,secicon}) => {
    return (
        <div className="w-full flex flex-row items-center justify-between rounded-xl mb-2.5"
            style={{ height: '60px', padding: '0% 7.5%', boxShadow: '1px 5px 40px 8px rgba(110, 117, 136, 0.07)' }}>
            <div className="flex flex-row items-center">
                {icon}
                <p style={{ color: '#23303B', fontSize: '16px', marginLeft: '10px' }}>{title}</p>
            </div>
            {secicon}
        </div>
    )
}

export default Setting