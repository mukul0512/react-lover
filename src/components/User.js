import { useState } from "react";

const User = (props) => {
const [count] = useState(0);
const [count2] = useState(1);

    return (
        <div className="user-container">
            <h1>This is About Us page using Functional based components</h1>
            <div className="user-card">
                <h1>Count = {count} </h1>
                <h1>Count2 = {count2} </h1>
                <h2>Name: {props.name} </h2>
                <h3>Location: Bangalore</h3>
                <h4>Contact: @karnwal_mukul</h4>
            </div>
        </div>
    )
};

export default User;