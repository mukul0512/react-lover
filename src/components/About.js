import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
  render() {
    return (
      <div className="about">
        <User name={"Mukul Karnwal (function based) "} />
        <h1>About Us class component</h1>
        <h2>This is Namaste React Web Series.</h2>
        <UserClass location={"Bangalore (class based) "} contact={"@karnwal_mukul (class based)"} />
      </div>
    )
  };
};

// const About = () => {
//   return (
//     <div className="about">
//       <User name={"Mukul Karnwal (function based) "} />
//       <UserClass location={"Bangalore (class based) "} contact={"@karnwal_mukul (class based)"} />
//     </div>
//   );
// };

export default About;
