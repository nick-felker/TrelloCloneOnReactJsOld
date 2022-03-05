import {configureStore, combineReducers} from '@reduxjs/toolkit';
import addingUserName from '../reducers/userName/addUserName';
import mainAppFunctional from "../reducers/mainAppFunctional";
import { persistStore,
         persistReducer,
         FLUSH,
         REHYDRATE,
         PAUSE,
         PERSIST, 
         PURGE,
         REGISTER,
         } 
         from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
};


const rootReducer = combineReducers({
    userName: addingUserName,
    mainAppFunctional: mainAppFunctional,
});



export const store  = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
}); 


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


