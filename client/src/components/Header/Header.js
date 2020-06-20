import React from 'react';
import axios from 'axios';
import { Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faCaretDown, faCaretUp, faUserPlus, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Main from '../../pages/Main/Main';
import Browse from '../../pages/Browse/Browse';
import Profile from '../../pages/Profile/Profile';
import Sub from '../../pages/Sub/Sub';
import Post from '../../pages/Post/Post';
import logo from '../../assets/logo/RES-ource.png';
import './Header.scss';


class Header extends React.Component {
	state = {
		isLoggedIn: false,
		settingDropDown: false,
		// search: '',
		currentUser: {}
		// allSubs: [],
		// searchSubs: []
	}

	componentDidMount() {
		//CHECK USER AUTHENTICATION
		axios
			.get('http://localhost:8080/auth/check-auth', { withCredentials: true })
			.then(res => {
				this.setState({
					isLoggedIn: true,
					currentUser: res.data
				})
			})
			.catch(err => {
				this.setState({
					isLoggedIn: false,
					currentUser: ''
				})
			})
		axios
			.get('http://localhost:8080/api/sub')
			.then(res => {
				this.setState({
					allSubs: res.data
				})
			})
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
		if (this.state.isLoggedIn === false) {
			return (
				<>
					<a href="http://localhost:8080/auth/" onClick={this.settingClickHandler} className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faSignInAlt} />
						Log In
					</a>

				</>
			)
		}
		else {
			return (
				<>
					<Link to={'/profile/' + this.state.currentUser.id} onClick={this.settingClickHandler} className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faUser} />
						My Profile
					</Link>
					<a href='http://localhost:8080/auth/logout' className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faSignOutAlt} />
						Log Out
					</a>
				</>
			)
		}
	}

	// //SEARCH FOR SUBS DROP DOWN FUNCTION (ON CHANGE)
	// searchSubs = e => {
	// 	let searchValue = e.target.value;
	// 	this.setState({
	// 		search: searchValue
	// 	}, () => {
	// 		let filteredSubs = this.state.allSubs.filter(sub => {
	// 			if (sub.name.includes(this.state.search)) {
	// 				return sub
	// 			}
	// 			return null;
	// 		})
	// 		this.setState({
	// 			searchSubs: filteredSubs
	// 		})
	// 	})
	// }

	// //RENDER SEARCHED SUBS DROP DOWN
	// renderSearch = () => {
	// 	// if (this.state.searchSubs.length < 5) {
	// 		let mappedSubs = this.state.searchSubs.map(sub => {
	// 			return (
	// 				<Link to={'/sub/' + sub.id} className='header__drop-search'>
	// 					/{sub.name}
	// 				</Link>
	// 			) 
	// 		})
	// 		return mappedSubs;
	// 	// }
	// }

	render() {
		return (
			<>
				<header className='header'>
					<Link to='/'>
						<img src={logo} alt="RES-ource" className="header__logo" />
					</Link>
					<input onChange={this.searchSubs} className='header__search' type="text" placeholder="Search" />
					{/*this.state.searchSubs.length !== [] && this.state.search !== '' &&
						<nav className='header__dropdown header__dropdown--search'>
							{this.renderSearch()}
						</nav>
					*/}
					<div className="header__settings" onClick={this.settingClickHandler}>
						<FontAwesomeIcon className='userIcon' icon={faCog} />
						{!this.state.settingDropDown ?
							<FontAwesomeIcon className='dropDownIcon' icon={faCaretDown} /> :
							<FontAwesomeIcon className='dropDownIcon' icon={faCaretUp} />
						}
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