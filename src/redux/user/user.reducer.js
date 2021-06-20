const INITIAL_STATE = {
    currentUser: null
}


const userReducer = (current_state=INITIAL_STATE, action) => {

    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...current_state,
                currentUser: action.payload
            }
        default:
            return current_state;
    }
}

export default userReducer;
