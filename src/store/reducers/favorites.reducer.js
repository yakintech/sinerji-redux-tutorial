export const favoritesReducer = (state = [], action) => {

    if(action.type === 'ADD_FAVORITE') {

        if(state.find(favorite => favorite.id === action.payload.id)) {
            return state
        }

        return [...state, action.payload]
    }
    else if(action.type === 'REMOVE_FAVORITE') {
        return state.filter(favorite => favorite.id !== action.payload.id)
    }
    else if(action.type === 'RESET_FAVORITES') {
        return []
    }
    else {
        return state
    }


}