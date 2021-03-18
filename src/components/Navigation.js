import React from 'react';
import { NavLink } from 'react-router-dom';

import CartContext from "../contexts/cartContext"; 

const Navigation = props => {
	return (
		<CartContext.Consumer>
			{
			(cart)=>(
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
			)}
		</CartContext.Consumer>
	);
};

export default Navigation;
