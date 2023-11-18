import { createSlice } from '@reduxjs/toolkit';
import * as thunks from '../thunks/login-thunk';

const initialState = {
	currentUser: null,
	loading: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: {
		[thunks.loginThunk.fulfilled]: (state, { payload }) => {
			state.currentUser = payload;
			console.log(state.currentUser);
			state.loading = false;
		},
		[thunks.loginThunk.pending]: (state, { payload }) => {
			state.loading = true;
		},
		[thunks.loginThunk.rejected]: (state, action) => {
			state.currentUser = null;
			state.loading = false;
		},
		
		[thunks.checkLoginThunk.fulfilled]: (state, { payload }) => {
				console.log(payload)
				state.currentUser = payload;
		},
		
		[thunks.logoutThunk.fulfilled]: (state, { payload }) => {
			state.currentUser = null;
			console.log('State updated');
			console.log(state.currentUser);
		},
	},
	reducers: {
		searchUpdate(state, action) {
			console.log('In Update');
			console.log(action.payload);
			state.currentSearch = action.payload;
		},
		locationUpdate(state, action) {
			state.currentLocation = action.payload;
		},
	},
});

export const { searchUpdate, locationUpdate } = userSlice.actions;

export default userSlice.reducer;
