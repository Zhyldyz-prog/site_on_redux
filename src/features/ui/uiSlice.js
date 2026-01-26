
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "light",
       
        posts: [
            { id: 1, title: "Пост о React", content: "React — это библиотека для UI." },
            { id: 2, title: "Пост о Redux", content: "Redux управляет состоянием приложения." },
            { id: 3, title: "Пост о Vite", content: "Vite — быстрый сборщик." }
        ]
    },
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
});

export const { toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;