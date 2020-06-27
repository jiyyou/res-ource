import React from 'react';
import axios from 'axios';
import { Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestion, faCog, faCaretDown, faCaretUp, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Main from '../../pages/Main/Main';
import Browse from '../../pages/Browse/Browse';
import Profile from '../../pages/Profile/Profile';
import Sub from '../../pages/Sub/Sub';
import Post from '../../pages/Post/Post';
import About from '../../pages/About/About';
import logo from '../../assets/logo/RES-ource.png';
import './Header.scss';

const API_URL = process.env.NODE_ENV === "production" ?
	'https://res-ource.herokuapp.com' :
	'http://localhost:8080';

class Header extends React.Component {
	state = {
		isLoggedIn: false,
		settingDropDown: false,
		search: '',
		currentUser: {},
		allSubs: [],
		searchSubs: []
	}

	componentDidMount() {
		//CHECK USER AUTHENTICATION
		axios
			.get(`${API_URL}/auth/check-auth`, { withCredentials: true })
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
			.get(`${API_URL}/api/sub`)
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
					<a href={`${API_URL}/auth/`} onClick={this.settingClickHandler} className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faSignInAlt} />
						Log In
					</a>
					<Link to='/about' onClick={this.settingClickHandler} className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faQuestion} />
						About
					</Link>
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
					<Link to='/about' onClick={this.settingClickHandler} className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faQuestion} />
						About
					</Link>
					<a href={`${API_URL}/auth/logout`} className='header__droplink'>
						<FontAwesomeIcon className='menuicon' icon={faSignOutAlt} />
						Log Out
					</a>
				</>
			)
		}
	}

	//SEARCH FOR SUBS DROP DOWN FUNCTION (ON CHANGE)
	searchSubs = e => {
		let searchValue = e.target.value;
		this.setState({
			search: searchValue
		}, () => {
			let filteredSubs = this.state.allSubs.filter(sub => {
				if (sub.name.toLowerCase().includes(this.state.search.toLowerCase())) {
					return sub
				}
				return null;
			})
			this.setState({
				searchSubs: filteredSubs
			})
		})
	}

	//CLICK HANDLER FOR DROP DOWN SEARCH
	clearSearch = () => {
		this.setState({
			search: ''
		})
	}

	//RENDER SEARCHED SUBS DROP DOWN
	renderSearch = () => {
			let mappedSubs = this.state.searchSubs.map(sub => {
				return (
					<Link to={'/sub/' + sub.id} onClick={this.clearSearch} className='header__drop-search'>
						/{sub.name}
					</Link>
				) 
			})
			return mappedSubs;
	}



	render() {
		return (
			<>
				<header className='header'>
					<Link to='/'>
						<img src={logo} alt="RES-ource" className="header__logo" />
					</Link>
					<input onChange={this.searchSubs} className='header__search' type="text" placeholder="Search" />
					{this.state.searchSubs !== [] && this.state.search !== '' &&
						<nav className='header__dropdown header__dropdown--search'>
							{this.renderSearch()}
						</nav>
					}
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
	          <Route path='/about' component={About} />        
	        </Switch>
			</>
		)
	}
}

export default Header;