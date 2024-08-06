import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div className="about">
      <User name={"Mukul Karnwal (function based) "} />
      <UserClass location={"Bangalore (class based) "} contact={"@karnwal_mukul (class based)"} />
    </div>
  )
}

export default About;
