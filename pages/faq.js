import { useQuery } from 'react-query';
import { FaqCard } from '../components/card.js';

import './faq.css';

//Sample data input for this component
//const ServicesList = [
//	{ question: 'test', answer: 'This is a test description.' },
//	{ title: 'test', price: 10, description: 'This is a test description.' }
//];


export default function Faq(props) {
	const { data, isLoading, error } = useQuery('faq', () => fetch('http://localhost:3001/faq').then(res => res.json()))

	if (isLoading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>{error}</p>;
	}
	return  (
		<div className="Faqs">
			<h2>Frequently Asked Questions</h2>
			<FaqCard Data={data} />
		</div>
)};



