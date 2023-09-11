import axios from './serverConnection'

export const loginRequest = ({ email, password })=>{
	return axios.post('/login', {
		email,
		password,
	})
	.then(res=>res.data)
}

export const registerRequest = ({ name, email, password })=>{
	return axios.post('/register', {
		name,
		email,
		password,
	})
	.then(res=>res.data)
}