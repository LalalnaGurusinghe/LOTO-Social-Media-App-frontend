import React from 'react';
import Grid2 from '@mui/material/Grid2';
import Login from './Login';
import Register from './Register';

const Authentication = () => {
  return (
    <div className='main-container'>
        <div className='img-container'>
        <img className="image" src="/images/eb54052e-a94f-4ea5-a9eb-b166ed8263e0.png" alt="background" />
        </div>
        <div className='auth-container'>
            <div className="card">
                <h2 className='heading'>LOTO</h2>
                <p className='sub-heading'>Connect, Share, and Grow with Loto.</p>
               <div className="login">
               <Register/>
               </div>
               
            </div>
        </div>
     
    </div>
  );
};

export default Authentication;



