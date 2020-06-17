import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faUserPlus, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Main from '../../pages/Main/Main';
import Browse from '../../pages/Browse/Browse';
import Profile from '../../pages/Profile/Profile';
import Sub from '../../pages/Sub/Sub';
import Post from '../../pages/Post/Post';
import logo from '../../assets/logo/RES-ource.png';
import './Header.scss';


class Header extends React.Component {
	state = {
		loggedIn: false,
		settingDropDown: false,
		userProfile: {},
	}

	//CLICK HANDLER FOR DROP DOWN MENU
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

	//DROP DOWN MENU RENDER FUNCTION
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

	render() {
		return (
			<>
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
	        <Switch>
	          <Route path="/" exact component={Main} />
	          <Route path="/sub" exact component={Browse} />
	          <Route path="/sub/:id" component={Sub} />
	          <Route path="/profile/:id" component={Profile} />
	          <Route path='/post/:id' component={Post} />          
	        </Switch>
			</>
		)
	}
}

export default Header;