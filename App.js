import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { store } from './reducers/theme.js';


import './App.css';



import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Services from './pages/services.js';
import Faq from './pages/faq.js';

import { BusinessCard, MapCard, ServiceCard, FaqCard } from './components/card.js';



//React Query query wrapper
const queryClient = new QueryClient();

//Import queries below




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

//Define a list of services
	const ServicesList = [
		{ title: 'test', price: 10, desctription: 'This is a test description.' },
		{ title: 'test', price: 10, desctription: 'This is a test description.' },
		{ title: 'test', price: 10, desctription: 'This is a test description.' },
		{ title: 'test', price: 10, desctription: 'This is a test description.' },
		{ title: 'test', price: 10, desctription: 'This is a test description.' },
	];


//Need to fix this - the redux state is not updating. It grabs the initial true value but does not update to dark (false) when changed. May be related to the local useState component in navigation.js. I think it is updating locally but not applying the action to the redux store.
	const theme = () => {store.subscribe(() => store.getState())}; 

	const currentTheme = theme ? 'App Light' : 'App Dark';

	return (
		<Router>
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
		</Router>
  );
}

export default App;
