import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Browse.scss';
import SubCard from '../../components/SubCard/SubCard';

class Browse extends React.Component{
	state = {
		subList: [],
		isLoggedIn: false,
		currentUser: {}
	}

	componentDidMount() {
		axios
			.get('http://localhost:8080/auth/check-auth', { withCredentials: true })
			.then(res => {
				let subscriptions = [];
				axios
					.get('http://localhost:8080/api/user/' + res.data.id)
					.then(response => {
						// let subscriptions = [];
						// res.data.subscriptions = response.data[0].subscriptions;
						response.data[0].subscriptions.forEach(sub => {
							subscriptions.push(sub.id);
						})
						res.data.subscriptions = subscriptions;
					})
				this.setState({
					isLoggedIn: true,
					currentUser: res.data
				})
			})
			.catch(err => {
				this.setState({
					isLoggedIn: false,
					currentUser: {}
				})
			})
		axios
			.get('http://localhost:8080/api/sub/')
			.then(res => {
				this.setState({
					subList: res.data
				})
			})
	}

	//RENDER SUB LIST 
	renderSubList = () => {
		return this.state.subList.map(sub => {
			return <SubCard 
				title={sub.name}
				description={sub.description}
				memberCount={sub.memberCount}
				subId={sub.id}
				currentUser={this.state.currentUser}
				key={sub.id} />
		})
	}

	//SUBSCRIBE/JOIN BUTTON HANDLER
	clickHandler = () => {

	}

	render() {
		return (
			<section className='browse'>
				<Link to='/'>
					<button className='browse__button'>POSTS</button>
				</Link>
				<ul className='browse__posts'>
					{this.renderSubList()}
				</ul>
			</section>
		)
	}
}
export default Browse;