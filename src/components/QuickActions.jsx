import React from 'react';


export const QuickActions = ({ icon, title, url }) => {
    return (
        <button onClick={event => window.location.href = url } className="quick-btn">
            <div className='flex justify-center items-center flex-col min-w-full'>
                <img style={{ height: '48px', width: '50px' }} src={icon} />
                <div style={{ marginTop: '10px'}}>{title}</div>
            </div>
        </button>
    )
}

export default QuickActions