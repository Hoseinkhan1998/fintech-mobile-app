import React from 'react'

export const Button = ({title}) => {
    return (
        <div className="w-full flex" style={{ padding: '0% 15%' }}>
            <div className="w-full flex items-center rounded-xl justify-center"
                style={{ height: '63px', background: "#456EFE", color: '#fff', fontSize: '20px' }}>{title}</div>
        </div>
    )
}

export default Button