import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import CartContext from "../contexts/cartContext"; 

const Navigation = props => {

const cart = useContext(CartContext);


	return (
		<CartContext.Consumer>
			{
			(cart)=>(
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.cart.length}</span>
			</NavLink>
		</div>
			)}
		</CartContext.Consumer>
	);
};

export default Navigation;
