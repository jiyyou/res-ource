import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Browse.scss';
import SubCard from '../../components/SubCard/SubCard';
import SubForm from '../../components/SubForm/SubForm';

class Browse extends React.Component{
	state = {
		subList: [],
		isLoggedIn: false,
		toggleSub: false,
		currentUser: {}
	}

	componentDidMount() {
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

	//TOGGLE CREATE SUB
	toggleSub = e => {
		e.preventDefault();
		if (this.state.toggleSub) {
			this.setState({
				toggleSub: false
			})
		}
		else {
			this.setState({
				toggleSub: true
			})
		}
	}

	//SUBMITHANDLER FOR SUBFORM 
	submitHandler = e => {
		e.preventDefault();
		if (e.target.title.value.includes(' ')) {
			window.alert('Title cannot include spaces');
			return '';
		}
		this.setState({
			newSub: {
				name: e.target.title.value,
				description: e.target.description.value
			}
		}, () => {
			axios
				.post('http://localhost:8080/api/sub/', {
					name: this.state.newSub.name,
					description: this.state.newSub.description
				})
				.then(res => {
					let newSubList = this.state.subList;
					newSubList.push(res.data);
					this.setState({
						subList: newSubList
					})
				})
				.catch(err => {
					window.alert(err);
				})			
		})
		e.target.reset();
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
				{this.state.isLoggedIn ? 
					<button onClick={this.toggleSub} className='browse__button browse__button--inverse'>CREATE SUB</button> : ''
				}
				{this.state.toggleSub ? 
					<SubForm submitHandler={this.submitHandler} /> : ''
				}
				<ul className='browse__posts'>
					{this.renderSubList()}
				</ul>
			</section>
		)
	}
}
export default Browse;