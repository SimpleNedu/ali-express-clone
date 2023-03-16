import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : 'systemDefault'
}
export const darkTheme = createSlice({
    name: "Theme",
    initialState,
    reducers: {
        systemDefault: (state) =>{
            state.theme = 'systemDefault'
        },
        dark: (state) =>{
            state.theme = 'dark'
        },
        light: (state) =>{
            state.theme = 'light'
        },
    }
})

export const { systemDefault, dark, light } = darkTheme.actions
export default darkTheme.reducer