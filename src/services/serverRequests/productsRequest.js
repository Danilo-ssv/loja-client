import axios from './serverConnection'

export const productsRequest = ()=>{
	return axios.get('/products').then(res=>res.data)
}