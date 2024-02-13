//combine reducers
import { combineReducers } from 'redux';
import { favoritesReducer } from './favorites.reducer';
import { counterReducer } from './counter.reducer';
import { userReducer } from './user.reducer';



export const rootReducer = combineReducers({
    counter: counterReducer,
    favorites: favoritesReducer,
    user: userReducer
})


//uygulama açıldıgında global user stateimin dolmasını istiyorum API TARAFINDAN