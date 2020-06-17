import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Main.scss';
import PostCard from '../../components/PostCard/PostCard';
import SubCard from '../../components/SubCard/SubCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

class Main extends React.Component{
	state = {
		postList: []
	}

	componentDidMount() {
		axios
			.get('http://localhost:8080/api/posts/')
			.then(res => {
				this.setState({
					postList: res.data
				})
			})
	}

	renderPostList = () => {
		return this.state.postList.map(post => {
			return <PostCard 
				title={post.title}
				sub={post.sub.name}
				subId={post.sub.id}
				author={post.user.fName + ' ' + post.user.lName}
				content={post.content}
				upvote={post.upvote}
				downvote={post.downvote}
				commentCount={post.comment.length}
				postId={post.id}
				key={post.id} />
		})
	}

	render() {
		return (
			<section className='main'>
				<Link to='/sub'>
					<button className='main__button'>BROWSE FOR SUBS</button>
				</Link>
				<button className='main__button main__button--inverse'>+ CREATE NEW POST</button>
				<ul className='main__posts'>
					{this.renderPostList()}
				</ul>
			</section>
		)
	}
}
export default Main;