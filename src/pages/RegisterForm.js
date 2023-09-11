import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { registerRequest } from '../services/serverRequests/userRequest'

function RegisterForm() {
	const [registerForm, setRegisterForm] = useState({
		name: '',
		email: '',
		password: '',
	})

	const registerMutation = useMutation({
		mutationFn: registerRequest,
		onSettled: (data, error, variables, context) => {
			if(data.msg == 'SAVED_USER'){
				alert('Usuário cadastrado com sucesso!')
				setRegisterForm({
					name: '',
					email: '',
					password: '',
				})
			}else if(data.msg == 'EXISTING_USER'){
				alert('Usuário já existe!')
			}
  		},
	})

	function onSubmit(event) {
		event.preventDefault()

		const { name, email, password } = registerForm

		if(name === '' || email === '' || password === '')
			return alert('Complete todos os campos')
		
		registerMutation.mutate({ name, email, password })
	}

	function formChange(event) {
		setRegisterForm({
			...registerForm, 
			[event.target.id]: event.target.value,
		})
	}

	return(
		<section>
			<form onSubmit={onSubmit}>
				<h1>Cadastre-se!</h1>
				<label for='name'>Nome: </label>
				<input
					type='text'
					id='name'
					value={registerForm.name}
					onChange={formChange}
				/><br />
				<label for='email'>email: </label>
				<input
					type='email'
					id='email'
					value={registerForm.email}
					onChange={formChange}
				/><br />
				<label for='password'>Senha: </label>
				<input
					type='password'
					id='password'
					value={registerForm.password}
					onChange={formChange}
				/><br />
				<input type='submit' />
			</form>
		</section>
	)
}

export default RegisterForm