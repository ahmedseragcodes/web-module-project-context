import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import CartContext from "./contexts/cartContext";
import ProductContext from "./contexts/productContext";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([
			...cart, item
		])
	};

	const removeItem = (itemIdToRemove)=>{
		setCart(
			cart.filter((cartItem)=>{
				return itemIdToRemove !== cartItem.id
			})
		)
	}

	console.log(cart)
	return (
		<CartContext.Provider value={{cart, removeItem}}>
		<div className="App">
			<Navigation />
			{/* Routes */}
			<ProductContext.Provider value={{products, addItem }}>
			<Route exact path="/">
				<Products  />
			</Route>
			</ProductContext.Provider>

			<Route path="/cart">
				<ShoppingCart  />
			</Route>
		</div>
		</CartContext.Provider>
	);
}

export default App;
