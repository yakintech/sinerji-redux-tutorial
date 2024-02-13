import axios from "axios"

export const loadUserAction = () => {

    return async (dispatch) => {
        axios.get('http://localhost:3000/user')
            .then(res => {
                dispatch({ type: "LOAD_USERS", payload: res.data[0] })
            })
    }
}

export const removeUserAction = () => {
    return {
        type: "REMOVE_USER"
    }
}

export const updateUserAction = () => {

    return async (dispatch) => {
        axios.get('http://localhost:3000/user')
            .then(res => {
                dispatch({ type: "LOAD_USERS", payload: res.data[1] })
            })
    }

}


//THUNK
// global state e default değer verebilirsiniz ( eğer bu değeriniz API den geliyorsa)
// global state değiştirmeden önce API den veri çekip ona göre değişiklik yapabilirsiniz