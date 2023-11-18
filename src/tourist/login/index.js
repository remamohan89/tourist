import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../thunks/login-thunk';
import { checkLoginThunk } from '../thunks/login-thunk';
import { logoutThunk } from '../thunks/login-thunk';
import { useEffect } from 'react';
// import { Navigate } from 'react-router';

const LoginComponent = () => {
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');
	let [role, setRole] = useState('');

	const currentUser = useSelector((state) => state.users.currentUser);
	console.log('currentUser');
	console.log(currentUser);
	
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("CheckLogin")
		dispatch(checkLoginThunk());
	}, []);

	const loginClickHandler = () => {
		console.log(role);
		const credentials = {
			username: username,
			password: password,
			role: role,
		};
		console.log('dispatching loginThunk');
		dispatch(loginThunk(credentials));
	};


	const logoutClickHandler = () => {
		console.log('dispatching logoutThunk');
		dispatch(logoutThunk());
	};



	// console.log(currentUser);
	// if (currentUser) {
	// 	return <Navigate to={'/home'} />;
	// 	// return <></>;
	// }

	return (
		<>
			{!currentUser && ( 
			<>
			<input
				className="form-control m-2"
				style={{ width: '80%' }}
				id="username"
				type="text"
				placeholder={'username'}
				value={username}
				onChange={(event) => setUsername(event.target.value)}
			/>

			<input
				className="form-control m-2"
				style={{ width: '80%' }}
				id="password"
				type="text"
				placeholder={'password'}
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>

			<select
				className="form-select m-2"
				style={{ width: '80%' }}
				onChange={(event) => setRole(event.target.value)}
			>
				<option selected>login as</option>
				<option value="1">Tourist</option>
				<option value="2">Guide</option>
				<option value="3">Hotel Manager</option>
			</select>

			<button
				className="btn btn-primary float-end"
				style={{ marginRight: '20%' }}
				type="submit"
				onClick={loginClickHandler}
			>
				login
			</button>
			</>
			)}

			{currentUser && ( 
			<>
				<h4> Welcome {currentUser.username} </h4>
				<button
					className="btn btn-primary float-end"
					style={{ marginRight: '20%' }}
					type="submit"
					onClick={logoutClickHandler}
				>
					logout
				</button>

			</>
			)}
		</>
	);
};

export default LoginComponent;
