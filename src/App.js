import React, { Component } from 'react';
import HeaderApp from './components/Header'
import ProductsContainer from './Containers/ProductsContainer';
import MessageContainer from './Containers/MessageContainer';
import CartContainer from './Containers/CartContainer';
import Footer from './components/Footer';


class App extends Component {
	render() {
		return (
			<div>
				<HeaderApp />
				<main id="mainContainer">
					<div className="container">
						<ProductsContainer />
						<MessageContainer />
						<CartContainer />
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
