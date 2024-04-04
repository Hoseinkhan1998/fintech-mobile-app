import React from 'react'

const InputsApp = ({ pholder }) => {
    return (
        <input className="plinut"
            style={{ width: '100%', paddingLeft: '10%', background: 'rgba(164, 169, 174, 0.15)', marginBottom: '10px' }}
            type="text"
            placeholder={pholder}
        />
    )
}

export default InputsApp