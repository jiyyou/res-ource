import React from 'react';
import axios from 'axios';
import PostCard from '../../components/PostCard/PostCard';
import logo from '../../assets/logo/RES-ource2.png';
import './Sub.scss';

class Sub extends React.Component {
	state = {
		name: '',
		description: '',
		memberCount: '',
		posts: []
	}


	componentDidMount() {
		axios
			.get(`http://localhost:8080/api/sub/${this.props.match.params.id}`)
			.then(res => {
				res.data[0].posts.map(post => {
					let filteredUser = res.data[0].postUsers.filter(user => {
						if (user.id === post.user_id) {
							return user;
						}
					})
					let filteredComments = res.data[0].postComments.filter(comment => {
						if (comment.post_id === post.id) {
							return comment;
						}
					})
					post.author = filteredUser[0].fName + ' ' + filteredUser[0].lName;
					post.commentCount = filteredComments.length;
					return post;
				})
				this.setState({
					name: res.data[0].name,
					description: res.data[0].description,
					memberCount: res.data[0].memberCount,
					posts: res.data[0].posts
				})
			})
		.catch(err => {
			window.alert(err);
		})
	}

	//CREATE POST LIST (SORT BY LATEST)
	renderPosts = () => {
		return this.state.posts.map(post => {
			return <PostCard 
				postId={post.id}
				title={post.title}
				sub={this.state.name}
				author={post.author}
				userId={post.user_id}
				content={post.content}
				upvote={post.upvote}
				downvote={post.downvote}
				commentCount={post.commentCount}
				date={Date.parse(post.updated_at)}
				key={post.id} />
		}).sort(function(a,b) {
			return b.props.date - a.props.date;
		})
	}

	render() {		
		return (
			<section className="sub">
				<div className="sub__banner"></div>
				<div className="sub__header">
					<img src={logo} alt="" className="sub__avatar" />
					<div className="sub__titlebox">
						<h1 className="sub__title">/{this.state.name}</h1>
						<p className="sub__members">{this.state.memberCount} members</p>
					</div>
					<p className='sub__description'>{this.state.description}</p>
					<button className='sub__button'>+ JOIN</button>
				</div>
				<div className='sub__body'>
					<button className='sub__button sub__button--inverse'>CREATE POST</button>
					<ul className="sub__postlist">
						{this.renderPosts()}
					</ul>
				</div>
			</section>
		)
	}
}

export default Sub;