const { createContext } = require("react");

const UserContext = createContext({
    loggedInUser: "Mukul",
});

export default UserContext;