import React, { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Home from '../pages/Home'
import Private from '../pages/Private'
import ProductScream from '../pages/ProductScream'
import LoginForm from '../pages/LoginForm'
import RegisterForm from '../pages/RegisterForm'

function Main(){
	// const [isLoggedIn, setisLoggedIn] = useState(false)


	function PrivateRoute({children}){
		const location = useLocation()
		const p = true

		if(!p)
			return(<Navigate to='/login' state={{from: location}} replace />)
		else
			return (children)
	}

	return(
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/private" element={<PrivateRoute><Private /></PrivateRoute>} />
				<Route path="/product" element={<ProductScream />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/cadastrar" element={<RegisterForm />} />
				<Route path="/contato" element={<div>Contato</div>} />
			</Routes>
		</main>
	)
}

export default Main