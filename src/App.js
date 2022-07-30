/*
This will be the home page 

Table of Contents:
	Imports
	Define Business Data
	Define React-Router Routes


TODO:
	Eventually, Update the business data and maybe even the nav links to be queried

*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux'


//Custom Components
import Header from './components/header.js';
import Footer from './components/footer.js';


//Pages
/*
import Home from './pages/home.js';
import Services from './pages/services.js';
import Faq from './pages/faq.js';
*/

//Styles
import './App.css';





function App() {

//Define Business data below
	const businessName = 'Modern LLC';
	const socialAccounts = [
		{link: 'https://www.google.com', text: 'Google'},
		{link: 'https://www.instagram.com', text: 'Instagram'},
		{link: 'https://www.twitter.com', text: 'Twitter'},
		{link: 'https://www.facebook.com', text: 'Facebook'}
	];

//Define react-router routes for site navigation
	const navList = [
	                {link: '/', text: 'Home'},
	                {link: 'Services', text: 'Services'},
	                {link: 'FAQ', text: 'FAQ'},
	];

//Define the theme
	const theme = useSelector((state) => state.theme.value)

	return (
		<Router>
 			<div className={theme ? 'Light' : 'Dark'}>
				<Header businessName={businessName} navList={navList} />
				<div className="SubApp">
		        		<div className="RouteWrapper">
						<Routes>
			          				<Route exact path="/" element={<p>Home</p>} />
		          				<Route path="/Services" element={<p>Services</p>} />
		          				<Route path="/FAQ" element={<p>FAQ</p>} />
	        				</Routes>
					</div>
					<Footer businessName={businessName} socialAccounts={socialAccounts} />
				</div>
			</div>
		</Router>
  );
}

export default App;
