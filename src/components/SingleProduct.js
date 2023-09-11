import React from 'react'

function SingleProduct(props){
	const product = props.value

	return(
		<div>
			<img src={product.url} width='250'/>
			<div className='content'>
				<div>{product.model}</div>
				<div>{product.price}</div>
				<div>{product.description}</div>
			</div>
		</div>
	)
}

export default SingleProduct