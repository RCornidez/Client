
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../features/themes/themes.js';

import './navigation.css';

/*
const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(store.getState());

	const toggleTheme = () => setTheme(themeFunction());

	const result = theme ? 'Light' : 'Dark';
        return (
                <div className="ThemeSwitcher">
                        <button onClick={() => {toggleTheme()}}>{result}</button>
                </div>
        )
};
*/

const DesktopNavigation = (props) => {
	const NavigationList = props.navList;

	return(
		<div className="DesktopNavigationWrapper">
				<ThemeToggle/>
		    	<ul className='NavigationList'>
		        	{NavigationList.map((nav) => (
					<li className='NavItem'>
						<Link className='DesktopItem' to={nav.link}>{nav.text}</Link>
					</li>
				))}
		        </ul>
		</div>
	    );
};

const MobileNavigation = (props) => {
	    const NavigationList = props.navList;

	    const [isOpen, setIsOpen] = useState(false);
	    const toggle = () => setIsOpen(!isOpen);

	    return (
		    <div className='MobileNavigationWrapper' onClick={toggle}>
		    	<div className={`${isOpen ? 'Show' : 'NoShow'}`} onClick={toggle}>
					<ThemeToggle/>
		        	<ul>
		                	{NavigationList.map((nav) => (
						<li className='ItemLi' key={nav.text}>
							<Link className='Item' to={nav.link} onClick={toggle}>{nav.text}</Link>
						</li>
					))}
		                </ul>
		   	 </div>
		    	 <div className='MenuWrapper'>
		         	<button className='Menu' onClick={toggle}>
		         		<span className={`${isOpen ? 'Cross' : 'Hamburger'}`}></span>
		         	</button>
		    	 </div>
		    </div>
		        );
};

//Removed from below - insert when fixed
//			<ThemeSwitcher />
function Navigation (props) {


	return (
		<nav>
			<DesktopNavigation navList={props.navList} />
			<MobileNavigation navList={props.navList} />
		</nav>
	)

}

export default Navigation;

