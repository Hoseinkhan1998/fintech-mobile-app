import React from 'react'


export const Services = ({ icon, title, url }) => {
    return (
        <div className='text-center' style={{ marginRight: '3%'}}>
        <button onClick={event => window.location.href = url } className="service-btn">
            <div>
                <div>{icon}</div>
            </div>
        </button>
        <p style={{color:'#8E949A', fontSize: '13px'}}>{title}</p>
        </div>
    )
}

export default Services