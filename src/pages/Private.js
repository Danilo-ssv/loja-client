// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'

// function Private(){
// 	const [form, setForm] = useState({
// 		id: Math.random(),
// 		model: '',
// 		description: '',
// 		price: '',
// 		url: '',
// 	})

// 	const [deleteForm, setDeleteForm] = useState({id: ''})

// 	const dispatch = useDispatch()

// 	function formChange(e){
// 		setForm({...form, [e.target.id]: e.target.value })
// 	}

// 	function newProductSubmit(e){
// 		e.preventDefault()	
// 		// dispatch(newProduct(form))
// 		setForm({ id: Math.random(), model: '', description: '', price: '', url: '', })
// 	}

// 	function deleteFormChange(e){
// 		setDeleteForm({id: e.target.value})
// 	}

// 	function deleteProductSubmit(e){
// 		e.preventDefault()
// 		// dispatch(deleteProduct(deleteForm.id))
// 		setDeleteForm({id: ''})
// 	}

// 	return(
// 		<session>
// 			<form onSubmit={newProductSubmit}>
// 				<h1>Adicionar novo produto</h1>
// 				<label for='model'>Modelo: </label>
// 				<input type='text' id='model' onChange={formChange} value={form.model} /><br />
// 				<label for='description'>Descrição: </label>
// 				<input type='text' id='description' onChange={formChange} value={form.description} /><br />
// 				<label for='price'>Preço: </label>
// 				<input type='text' id='price' onChange={formChange} value={form.price} /><br />
// 				<label for='url'>URL: </label>
// 				<input type='text' id='url' onChange={formChange} value={form.url} /><br />
// 				<input type='submit' />
// 			</form>
// 			<form onSubmit={deleteProductSubmit}>
// 				<h1>Apagar produto</h1>
// 				<label for='id'>ID: </label>
// 				<input type='text' id='id' onChange={deleteFormChange} value={deleteForm.id}/><br />
// 				<input type='submit' value='Apagar' />
// 			</form>
// 		</session>
// 	)
// }

// export default Private