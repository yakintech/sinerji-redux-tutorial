
export const addtoFavAction = (favorite) => {
    return {
        type: 'ADD_FAVORITE',
        payload: favorite
    }
}

export const removeFavAction = (favorite) => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: favorite
    }
}

export const resetFavAction = () => {
    return {
        type: 'RESET_FAVORITES'
    }
}