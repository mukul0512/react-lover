import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div className="about">
      {/* <h1>This is About Us page.</h1> */}
      <User />
      <UserClass />
    </div>
  )
}

export default About;
