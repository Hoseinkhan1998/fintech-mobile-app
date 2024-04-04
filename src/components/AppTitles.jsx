import React from 'react'

export const AppTitles = ({title}) => {
    return (
        <div className=" flex items-center" style={{ width: '100%', paddingLeft: '10%' }}>
            <p style={{ color: '#23303B', fontSize: '19px' }}>{title}</p>
        </div>
    )
}

export default AppTitles