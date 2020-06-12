import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Main.scss';
import PostCard from '../../components/PostCard/PostCard';


function Main(props) {
	// componentDidMount() {
	// 	const authToken = sessionStorage.getItem('authToken');
		

	// }

	return (
		<section className='main'>
			<button className='main__create'>+ CREATE NEW POST</button>
			<ul className='main__posts'>
				<PostCard />
			</ul>
		</section>
	)
}

export default Main;