/*
This will be the home page 

Table of Contents:
	Imports
	Define Business Data
	Define React-Router Routes


TODO:
	Create Theme Toggle - Light, Dark, Color-Blind (Would be a plus!)
	Eventually, Update the business data and maybe even the nav links to be queried

*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Custom Components
import Header from './components/header.js';
import Footer from './components/footer.js';

//Pages
import Home from './pages/home.js';
import Services from './pages/services.js';
import Faq from './pages/faq.js';

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


	return (
		<Router>
 			<div className={currentTheme}>
				<Header businessName={businessName} navList={navList} />
				<div className="SubApp">
		        		<div className="RouteWrapper">
						<Routes>
		          				<Route exact path="/" element={<Home />} />
		          				<Route path="/Services" element={<Services />} />
		          				<Route path="/FAQ" element={<Faq />} />
	        				</Routes>
					</div>
					<Footer businessName={businessName} socialAccounts={socialAccounts} />
				</div>
			</div>
		</Router>
  );
}

export default App;
