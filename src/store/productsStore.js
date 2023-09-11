import { create } from 'zustand'

export const productsStore = create(set => ({
	products: [],
	// getProducts: ()=>set(state => ({products: [1] })),
	getProducts: payload=>set(state => {
		return ({products: [...state.products, payload] })
		// console.log(payload)
	}),
	// getProducts: ()=>set(state => console.log("1")),
	

	inc: ()=>set(state => ({p: state.p + 1})),
	dec: ()=>set(state => ({p: state.p - 1})),
}))

