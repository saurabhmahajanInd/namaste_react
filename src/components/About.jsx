import { Outlet, Link } from 'react-router-dom';
import UserClass from './UserClass';


// const About = () => {
//   return (<> <h1>This is About us page.</h1>
//   <UserClass name={"Saurabh Mahajan The Great"} age={29} location={'Pune'}/></>);
  
// };


// export default About;
import React, { Component } from 'react';
import { UserDataContext } from '../utils/UserDataContext';

export default class About extends Component {


  constructor() {
    super();
    console.log("Parent class Constructor");
  }

  componentDidMount() {
    console.log('Parent class Did Mount');
  }

  render() {
    console.log('Parent class Render');
     return (<> <h1>This is About us page.</h1>
     <div>
        <Link to="basic"> Basic About </Link>
        <Link to="advance">Advanced About </Link></div>
        <UserClass name={"Saurabh Mahajan The Great"} age={29} location={'Pune'}/>
        <UserClass name={"Arpit Neema"} age={29} location={'Mumbai'}/>
        <UserDataContext.Consumer>
          {(data) => {
           return  <span>{data.loggedInUser}</span>
          }}
        </UserDataContext.Consumer>
        <Outlet />
       </>);
  }
}
