import {applyMiddleware,createStore,compose} from 'redux'
import logger from 'redux-logger'
import RootReducer from './reducers'
import ReduxThunk from 'redux-thunk'
import {REHYDRATE,persistStore} from 'redux-persist'


const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(ReduxThunk,logger)
    )
);
persistStore(store);
export default store;
