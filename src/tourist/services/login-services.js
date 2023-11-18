import axios from 'axios';

const LOGIN_URL = 'http://localhost:4000/login';
const LOGOUT_URL = 'http://localhost:4000/logout';

const api = axios.create({ withCredentials: true });

export const login = async (credentials) => {
	console.log('Login service');
	const response = await api.post(LOGIN_URL, credentials);
	console.log(response.data);
	return response.data;
};

export const checkLogin = async () => {
	console.log('checkLogin service');
	const response = await api.get(LOGIN_URL);
	console.log(response.data);
	return response.data;
};

export const logout = async () => {
	console.log('Logout service');
	const response = await api.post(LOGOUT_URL);
	console.log(response.data);
	return response.data;
};
