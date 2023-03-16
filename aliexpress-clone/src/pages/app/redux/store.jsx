import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from './darkTheme'

export const Store = configureStore({
    reducer: {
        Theme: ThemeReducer
    }
})