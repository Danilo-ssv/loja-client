import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { loginRequest } from '../services/serverRequests/userRequest'

function LoginForm(){
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	})

	const loginMutation = useMutation({
		mutationFn: loginRequest,
		onSuccess: (data, variables, context) => {
			
			if(data.userToken){
				localStorage.setItem('token', data.userToken)
				
			}else{
				alert(data.msg)
			}
		}
	})

	function onSubmit(event){
		event.preventDefault()
		const { email, password } = loginForm

		if(email === '' || password === '')
			return alert('Complete todos os campos')

		loginMutation.mutate({ email, password })
		// fetch("http://localhost:5000/login", {
		// 	method: "POST",
		// 	headers: {"content-type": "application/json"},
		// 	body: JSON.stringify({email: "qwe", password: "123"})
		// })
		// .then(res => res.json())
		// .then(data => {console.log(data)})
	}

	function toUpdate(event) {
		setLoginForm({
			...loginForm,
			[event.target.id]: event.target.value
		})
	}
	return(
		<section>
			<form onSubmit={onSubmit}>
				<h1>Faça login!</h1>
				<label for="email">Email: </label>
				<input
					type="email"
					id="email"
					onChange={toUpdate}
					value={loginForm.email}
				/><br />
				<label for="password">Senha: </label>
				<input
					type="password"
					id="password"
					onChange={toUpdate}
					value={loginForm.password}
				/><br />
				<input  type="submit" />
			</form>
			<legend>
				Não possui conta? <Link to="/cadastrar">clique aqui!</Link>
			</legend>
		</section>
	)
}

export default LoginForm