
import './card.css';

function BusinessCard (props) {
	const data = props.BusinessData;	

	return (
		<div className="BusinessCard">
			<h3>Contact Us:</h3>
			<a href={`tel:${data.phone1}`}>{data.phone1}</a>
			<a href={`mailto:${data.email1}`}>{data.email1}</a>
			<a href={data.social1}>Instagram</a>
			<a href={data.social2}>Facebook</a>
		</div>
	)
};


function MapCard (props) {
	

	return (
		<div className="MapCard">

		</div>
	)
};




function ServiceCard (props) {
	const list = props.Data;

	return (
		<div className="ServiceItems">
			{list.map(service => 
				<div className="ServiceItem">
					<div className="ServiceItemTop">
						<p className="ServiceTitle">{service.title} -</p>
						<p className="ServicePrice">${service.price}</p>
					</div>
					<div className="ServiceItemBottom">
						<p className="ServiceDescription">{service.description}</p>
					</div>
				</div>
			)}
		</div>
	)
};


function FaqCard (props) {
	const list = props.Data;

	return (
		<div className="FaqItems">
			{list.map(item => 
				<div className="FaqItem">
					<div className="FaqItemTop">
						<p className="FaqItemQuestion">{item.question}?</p>
					</div>
					<div className="FaqItemBottom">
						<p className="FaqItemAnswer">{item.answer}</p>

					</div>
				</div>
			)}
		</div>
	)
};


export { BusinessCard, MapCard, ServiceCard, FaqCard };
