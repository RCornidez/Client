import { useQuery } from 'react-query';
import { ServiceCard  } from '../components/card.js';

import './services.css';
//Sample data input for this component
//const ServicesList = [
//	{ title: 'test', price: 10, description: 'This is a test description.' },
//	{ title: 'test', price: 10, description: 'This is a test description.' },
//	{ title: 'test', price: 10, description: 'This is a test description.' },
//	{ title: 'test', price: 10, description: 'This is a test description.' },
//	{ title: 'test', price: 10, description: 'This is a test description.' }
//];


export default function Services(props) {
	const { data, isLoading, error } = useQuery('services', () => fetch('http://localhost:3001/services').then(res => res.json()))

	if (isLoading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>{error}</p>;
	}
	return  (
		<div className="Services">
			<h2>Our Services</h2>
			<ServiceCard Data={data} />
		</div>
)};



