import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from '../services/login-services';

export const loginThunk = createAsyncThunk('login', async (credentials) => {
	const selectedUser = await service.login(credentials);
	return selectedUser;
});

export const checkLoginThunk = createAsyncThunk('checkLogin', async () => {
	const selectedUser = await service.checkLogin();
	return selectedUser;
});

export const logoutThunk = createAsyncThunk('logout', async () => {
	const oldUser = await service.logout();
	return oldUser;
});
