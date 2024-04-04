import React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Prof from '../pages/images/prof.png';

const Profilebtn = () => {
    return (
        <Box>
            <Badge color="warning" variant="dot">
                <button onClick={event => window.location.href = '/profile'}>
                    <img src={Prof} />
                </button>
            </Badge>
        </Box>

    )
}

export default Profilebtn