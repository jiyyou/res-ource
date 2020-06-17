import React from 'react';
import { Link } from "react-router-dom";
import './Main.scss';
import PostCard from '../../components/PostCard/PostCard';
import SubCard from '../../components/SubCard/SubCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

function Main(props) {


	return (
		<section className='main'>
			<Link to='/sub'>
				<button className='main__button'>BROWSE FOR SUBS</button>
			</Link>
			<button className='main__button main__button--inverse'>+ CREATE NEW POST</button>
			<ul className='main__posts'>
				<PostCard />
				<SubCard />
				<CommentCard />
				<ProfileCard />
			</ul>
		</section>
	)
}

export default Main;