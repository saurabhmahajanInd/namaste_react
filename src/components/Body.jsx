import Search  from './Search';
import RestroContainer  from './RestroContainer';
import { Outlet } from 'react-router-dom';
import UserDataContext from '../utils/UserDataContext';

const Body = () => {
  return (

    <div id="body-container">
      <Search />
      {/* <RestroContainer /> */} 
      <Outlet/>
    </div>
    
  );
};

export default Body;