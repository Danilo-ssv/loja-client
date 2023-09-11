import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

import { productsRequest } from '../services/serverRequests/productsRequest'
import SingleProduct from '../components/SingleProduct'

function ProductScream(){

	const query = useLocation().search.split('?id=')[1]

	const { isLoading, error, data } = useQuery({
		queryKey: ['products'], 
		queryFn: productsRequest,
		staleTime: 1000 * 60 * 5,
	})

	if(isLoading) return (<h1>Carregando...</h1>)

	return(
		<div>
			<div>
				{data.map(product=>{
					if(product.id==query)
						return(<SingleProduct value={product}/>)
				})}
			</div>
		</div>
	)
}

export default ProductScream