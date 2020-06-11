// import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import onClickOutside from "react-onclickoutside";
// import { faUser, faCaretDown, faUserPlus, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import './HeaderDropDown.scss';

// function HeaderDropDown(props) {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const toggle = () => setIsOpen(!isOpen);

// 	HeaderDropDown.handleClickOutside = () => setIsOpen(false);

// 	return (
// 		<nav onClick={toggle}>
// 			<Link className='header__droplink'>
// 				<FontAwesomeIcon className='menuicon' icon={faUserPlus} />
// 				<p>Sign Up</p>
// 			</Link>
// 			<Link className='header__droplink'>
// 				<FontAwesomeIcon className='menuicon' icon={faSignInAlt} />
// 				<p>Log In</p>
// 			</Link>
// 		</nav>
// 	)
// }