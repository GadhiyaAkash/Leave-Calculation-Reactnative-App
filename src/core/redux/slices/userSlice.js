import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.user = action.payload;
        }
    },
})

// Actions
export const { setUserDetails } = userSlice.actions

// Reducer
export default userSlice.reducer;