import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const initialState = {
	route : 'home'
}
class App extends Component {
	constructor(){
		super();
		this.state = initialState;
	}

	onRouteChange = (route) => {
		console.log(route);
		this.setState({route});
	}

	render() {
		const {route} = this.state;
		return (
			<div className = 'container'>
		    <Navigation onRouteChange = {this.onRouteChange} />
		    {route === 'home' ? <Home /> : <Projects /> }
		    <Footer />
		    </div>
		);
	}
}

export default App;
