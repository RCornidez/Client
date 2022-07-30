import './footer.css';

export default function Footer(props) {
	const socialAccounts = props.socialAccounts;
	const socialList = socialAccounts.map((account) => <li><a href={account.link}>{account.text}</a></li>);


	return(
		<div className="Footer">
		<h2>{props.businessName}</h2>
		<p>&copy;{props.businessName}</p>
		<ul>{socialList}</ul>
		</div>
	)

}


