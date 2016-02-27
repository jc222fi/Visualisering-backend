const initialState = require("./initial-state");

module.exports = (currentState, action) => {
    switch(action.type) {
    default: return currentState || initialState;
    }
    
};