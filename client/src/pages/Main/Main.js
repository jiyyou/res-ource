import React from 'react';
import './Main.scss';
import PostCard from '../../components/PostCard/PostCard';
import SubCard from '../../components/SubCard/SubCard';

function Main(props) {
	// componentDidMount() {
	// 	const authToken = sessionStorage.getItem('authToken');
		

	// }

	return (
		<section className='main'>
			<button className='main__button'>BROWSE FOR SUBS</button>
			<button className='main__button main__button--inverse'>+ CREATE NEW POST</button>
			<ul className='main__posts'>
				<PostCard />
				<SubCard />
			</ul>
		</section>
	)
}

export default Main;