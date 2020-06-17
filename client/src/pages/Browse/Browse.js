import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Browse.scss';
import SubCard from '../../components/SubCard/SubCard';

class Browse extends React.Component{
	state = {
		subList: []
	}

	componentDidMount() {
		axios
			.get('http://localhost:8080/api/sub/')
			.then(res => {
				this.setState({
					subList: res.data
				})
			})
	}

	renderSubList = () => {
		return this.state.subList.map(sub => {
			return <SubCard 
				title={sub.name}
				description={sub.description}
				memberCount={sub.memberCount}
				subId={sub.id}
				key={sub.id} />
		})
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