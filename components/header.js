import { useState } from 'react';
import Navigation from './navigation.js';

import './header.css';


export default function Header(props) {
	
	return(
		<div className="Header">
			<h1 className="BusinessName">{props.businessName}</h1>
			<Navigation navList={props.navList}/>
		</div>
	)

}


