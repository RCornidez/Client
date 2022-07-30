import { useQuery } from 'react-query';
import { BusinessCard, MapCard } from '../components/card.js';

import './home.css';




export default function Home(props) {
	const { data, isLoading, error } = useQuery('business', () => fetch('http://localhost:3001/business').then(res => res.json()))

	if (isLoading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>{error}</p>;
	}
	return  (
		<div className="Home">
			<BusinessCard BusinessData={data} />
			<MapCard />
		</div>
)};



