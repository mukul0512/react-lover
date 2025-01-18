import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            // count: 0,
            // count2: 2,
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
        //  console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child Component Did Mount");
        // Api call
        const data = await fetch("https://api.github.com/users/mukul0512");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        console.log(this.props.name + "Child Render");
        const { name, location, avatar_url, contact } = this.state.userInfo;
        // const { count, count2 } = this.state;

        return (
            <div className="user-container">
                <h1>This is About Us page using Class based components</h1>
                <div className="user-card">
                    {/* <h1>Count: {count} </h1>
                    <h1>Count2: {count2} </h1> */}
                    {/* <button onClick={() => {
                        // Never Update State Variable Directly
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1
                            });
                            }}>
                            Count Increase
                            </button> */}
                    <img src={avatar_url} alt="mukul dp" />
                    <h2>Name: {name}</h2>
                    <h3>Location: {location} </h3>
                    <h4>Contact: {contact} </h4>
                </div>
            </div>
        );
    };
};

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE ----
 *
 *      render(APi data)
 *      <HTML (new API data>)
 * ComponentDid Update
 *
 */