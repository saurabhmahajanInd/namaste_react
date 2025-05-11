import { useState, useContext, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineOfflineStatus from '../utils/useOnlineOfflineStatus';
import { UserDataContext }  from '../utils/UserDataContext.js';


const Header = () => {

  const [btnName, setBtnName] = useState('Login');

  const networkStatus = useOnlineOfflineStatus();

  const userData = useContext(UserDataContext);

  const [userName, setUserName] = useState();

  return (
        
  
    <div id="main-header" className="flex justify-between">
      <div id="logo-container" className="w-25">
        <img src={LOGO_URL} />
      </div>
      <div id="nav-container">
        <ul className="flex">
          <li>Online Status: {networkStatus ? <span className="statusOnline">Online</span> : <span className="statusOffline">Offline</span>}</li>
          <li><Link to="/">Home</Link>  </li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/contact">Contact US</Link> </li>
          <li> {userData.loggedInUser}</li>
          <li> Cart </li>
        </ul>
        <button onClick={()=> {
          if(btnName == 'Login' ? setBtnName('LogOut') : setBtnName('Login') );
        }}>{btnName}</button>
      </div>
    </div>
  );
};

export default Header;