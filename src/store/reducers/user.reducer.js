import axios from "axios"

export const userReducer = (state = {}, action) => {

    if (action.type == "LOAD_USERS") {
        return action.payload
    }
    else if (action.type == "REMOVE_USER") {
        return {}
    }
    else if (action.type == "UPDATE_USER") {
        return action.payload
    }
    else {
        return state
    }
}
        