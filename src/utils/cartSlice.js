import { createSlice } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Warning by Vanilla Redux i.e. older redux: Don't mutate the state, returning was mandatory 
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;


            // Note: Redux toolkit uses immer js(a library) behind the scene.
            // mutating the state here
            // Redux toolkit : We have to mutate the state
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        //originalState = {items: ["pizza"]}
        // clearCart: (state) => {
        //     console.log(state); // will not print [pizza] 
        //     console.log(current(state)); // will now be print[pizza] 
        //     state = []; // not possible to do that directly. Doesn't work there
        //     console.log(state); // []  
        // RTK - Either mutate the existing state or return a new state 
        // state.items.length = 0; // state = [] i.e. originalState will be empty
        //     return {items: []}; // this new object will be replaced inside originalState = {items: []}
        // }

        clearCart: (state) => {
            // state = ["Mukul"]; // not possible to do that directly. Doesn't work there
            state.items.length = 0; // state = [] i.e. originalState will be empty
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;