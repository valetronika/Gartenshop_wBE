import { createSlice } from "@reduxjs/toolkit";

const categoriesReducer = createSlice({
    name: "categoriesReducer",
    initialState: [],
    reducers: {
        getAllCategoriesActions(state, action) {
            return [...action.payload];
        },
    },
});

export const { getAllCategoriesActions} =
    categoriesReducer.actions;
export default categoriesReducer.reducer;
