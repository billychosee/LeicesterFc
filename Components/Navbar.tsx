import React from 'react';  
import logo from '../public/Images/king_power.png';

import fbs from '../public/Images/Logo_FBS_Broker_Forex.png'

const Navbar = () => {  
  return (  <div>
    <div className="bg-darkBlue flex px-10 py-2">  
      <img src={logo.src} alt="Logo" className="h-14" />  
    </div> 
    </div> 
  );  
};  

export default Navbar;