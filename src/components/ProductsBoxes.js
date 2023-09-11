import React from 'react'
import { Link } from 'react-router-dom'

function ProductsBoxes(props){

	if(props.value == undefined)
		return;
	return(
		<div className="product-conteiner">
			{props.value.map(product => {
				return(
					<Link to={`/product?id=${product.id}`}>
						<div className="productBox">
							<div className="image">
								<img src={product.url} width="100%" />
							</div>
							<div>{product.model}</div>
							<div>{product.price}</div>
						</div>
					</Link>
				)
			})}
		</div>
	)
}

export default ProductsBoxes