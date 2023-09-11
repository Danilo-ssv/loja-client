import React, { useState, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import '../styles/Home.css'

import { productsRequest } from '../services/serverRequests/productsRequest'
import ProductsBoxes from '../components/ProductsBoxes'

function Home(){

	const { isLoading, error, data } = useQuery({
		queryKey: ['products'], 
		queryFn: productsRequest,
		staleTime: 1000 * 60 * 5,
		// refetchInterval: 1000,
	})

	if(isLoading) return (<h1>Carregando...</h1>)

	return(
		<section>
			<ProductsBoxes value={ data } />
		</section>
	)
}

export default Home
