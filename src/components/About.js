import React from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div className="about">
        <User name={"Mukul Karnwal (function based) "} />
        <h1>About Us class component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className='text-xl font-bold'>{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
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
