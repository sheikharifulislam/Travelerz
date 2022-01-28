import React from 'react';
import { CircularProgress } from '@mui/material';

const CircularLoader = () => {

    const CircularProgressStyle={
        position: 'absolute',       
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        margin: '50px 0',
         
    }      
    return <CircularProgress style={CircularProgressStyle}/>
};

export default CircularLoader;