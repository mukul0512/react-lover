import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { count: 0, count2: 2 };
        console.log("Constructor");
    }

    render() {
        const { location, contact } = this.props;
        const { count, count2 } = this.state;
        console.log("Render");

        return (
            <div className="user-container">
                <h1>This is About Us page using Class based components</h1>
                <div className="user-card">
                    <h1>Count: {count} </h1>
                    <h1>Count2: {count2} </h1>
                    <button onClick={() => {
                        // Never Update State Variable Directly
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1
                        });
                    }}>Count Increase</button>
                    <h2>Name: Mukul Karnwal</h2>
                    <h3>Location: {location} </h3>
                    <h4>Contact: {contact} </h4>
                </div>
            </div>
        );
    };
};

export default UserClass;