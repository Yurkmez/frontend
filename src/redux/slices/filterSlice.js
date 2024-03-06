import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // We can mutate state - thanks to immer librery!
            state.title = action.payload;
            // This is tradition metod
            // return { ...state, title: action.payload };
        },
        resetFilters: (state) => {
            return initialState;
        },
    },
});
// console.log(filterSlice.actions.setTitleFilter());
export const { setTitleFilter, resetFilters } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export default filterSlice.reducer;
