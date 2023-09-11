import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import '../styles/Header.css'

function Header() {

	const { data } = useQuery({
		queryKey: ['user'],
		queryFn: ()=>{
			const token = localStorage.getItem('token')
			if(token)
				return(<Link to="/login" className='link'>logout</Link>)
			else
				return(<Link to="/login" className='link'>Login</Link>)
		},
	})

	console.log(data)

	return(
		<header>
			<Link className="logo">Logo</Link>
			<nav>
				<Link to="/" className='link'>Home</Link>
				{data}
				<Link to="/contato" className='link'>Contato</Link>
				<Link to="/private" className='link'>Private</Link>
			</nav>
		</header>
	)
}

export default Header