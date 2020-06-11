import React from 'react';
// import HeaderDropDown from '../HeaderDropDown/HeaderDropDown';
// import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faUserPlus, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo/RES-ource.png';
import './Header.scss';


class Header extends React.Component {
	state = {
		loggedIn: false,
		settingDropDown: false,
		userProfile: {}
	}

	settingClickHandler = () => {
		if (this.state.settingDropDown === false) {
			this.setState({
				settingDropDown: true				
			})
		}
		else {
			this.setState({
				settingDropDown: false
			})
		}
	}

	renderDropDown = () => {
		if (this.state.loggedIn === false) {
			return (
				<>
					<Link className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faUserPlus} />
						<p>Sign Up</p>
					</Link>
					<Link className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faSignInAlt} />
						<p>Log In</p>
					</Link>
				</>
			)
		}
		else {
			return (
				<>
					<Link className='header__droplink'>
						<img src="" alt="" />
						<p>My Profile</p>
					</Link>
					<Link className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faSignOutAlt} />
						<p>Log Out</p>
					</Link>
				</>
			)
		}
	}

	// handleClickOutside = () => {
	// 	console.log('test');
	// 	if (this.state.settingDropDown === true) {
	// 		this.setState({
	// 			settingDropDown: false
	// 		})
	// 	}
	// }

	render() {
		return (
			<header className='header'>
				<Link to='/'>
					<img src={logo} alt="RES-ource" className="header__logo" />
				</Link>
				<input className='header__search' type="text" placeholder="Search" />
				<div className="header__settings" onClick={this.settingClickHandler}>
					<FontAwesomeIcon className='userIcon' icon={faUser} />
					<FontAwesomeIcon className='dropDownIcon' icon={faCaretDown} />
				</div>
				{this.state.settingDropDown===true &&
					<nav className='header__dropdown'>
						{this.renderDropDown()}
					</nav>
				}
			</header>
		)
	}
}

export default Header;