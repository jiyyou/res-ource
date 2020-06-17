import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './Main.scss';
import PostCard from '../../components/PostCard/PostCard';

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
				userId={post.user_id}
				content={post.content}
				upvote={post.upvote}
				downvote={post.downvote}
				commentCount={post.comment.length}
				postId={post.id}
				date={Date.parse(post.updated_at)}
				key={uuidv4()} />
		}).sort(function(a,b) {
			return b.props.date - a.props.date;
		})
	}

	render() {
		return (
			<section className='main'>
				<Link to='/sub'>
					<button className='main__button'>BROWSE FOR SUBS</button>
				</Link>
				<ul className='main__posts'>
					{this.renderPostList()}
				</ul>
			</section>
		)
	}
}
export default Main;