import {configureStore} from '@reduxjs/toolkit';
import addingUserName from './reducers/addUserName';
import mainAppFunctional from './reducers/mainAppFunctional';

export const store = configureStore({
    reducer: {
        addingUserName,
        mainAppFunctional,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




/*import { createSlice } from "@reduxjs/toolkit";
import { MainAppRowArray } from '../../types'

*/