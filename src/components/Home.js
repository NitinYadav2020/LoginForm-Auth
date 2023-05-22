import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import './Home.css';
import { ProductsTable } from './ProductsTable/ProductsTable';
import { Header } from './Header/Header';


const Home = () => {
	const [data, setData] = useState([]);
	const [isAsc, setAsc] = useState(true)
	useEffect(() => {
		getProduct();
	}, [isAsc]);

	const getProduct = () => {
		const url = new URL('https://fakestoreapi.com/products');
		url.searchParams.set('sort', isAsc ? "asc" : "desc")
		const res = axios.get(url)
			.then((data) => { setData(data.data) })
			.catch((error) => { console.log(error) });
	};

	const deleteProduct = () => {
		const productid = prompt('product id to delete');

		const url = `https://fakestoreapi.com/products/${productid}`;
		const res = axios.delete(url)
			.then((data) => { alert(`Product with ID: ${productid} deleted Successfully.`) })
			.catch((error) => { alert("error in deletion") });
	}
	return data.length ? (
		<div className='homeMain'>
			<div class="app-container">
				<div class="app-content">
					<div class="app-content-header">
						<Header />
						<div className='addNew'>
							<button onClick={() => { window.location.href = '/addNewProd' }}>Add New Product</button>
							<button onClick={() => { deleteProduct() }}>DeleteProduct</button>
							<button onClick={() => { window.location.href = '/UpdateProductList' }}>Update Product</button>

						</div>

						{data && <ProductsTable setAsc={setAsc} data={data} />}
					</div>
				</div>
			</div>
		</div>
	) : <div style={{
		color: "#fff"
	}}>Loading...</div>
}

export default Home
