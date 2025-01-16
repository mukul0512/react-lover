const { createContext } = require("react");

const UserContext = createContext({
    loggedInUser: "Mukul Karnwal",
});

export default UserContext;