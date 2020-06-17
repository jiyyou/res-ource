import React from 'react';
import axios from 'axios';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PostCard from '../../components/PostCard/PostCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import './Profile.scss';
import timeSince from '../../helpers/timeSince';

class Profile extends React.Component {
	state = {
		name: '',
		description: '',
		posts: [],
		postCount: '',
		comments: [],
		commentCount: ''
	}

	componentDidMount() {
		axios
			.get(`http://localhost:8080/api/user/${this.props.match.params.id}`)
			.then(res => {
				res.data[0].posts.map(post => {
					let filteredSub = res.data[0].postSubs.filter(sub => {
						if (sub.id === post.sub_id) {
							return sub;
						}
					})
					post.sub = filteredSub[0];
					return post;
				})
				res.data[0].comments.map(comment => {
					let filteredPosts = res.data[0].commentPosts.filter(filteredPost => {
						if (filteredPost.id === comment.post_id) {
							return filteredPost;
						}
					})
					let filteredSubs = res.data[0].commentSubs.filter(filteredSub => {
						if (filteredSub.id === comment.sub_id) {
							return filteredSub;
						}
					})
					comment.post = filteredPosts[0];
					comment.sub = filteredSubs[0];
					return comment;
				})
				this.setState({
					name: res.data[0].fName + ' ' + res.data[0].lName,
					description: res.data[0].description,
					posts: res.data[0].posts,
					postCount: res.data[0].posts.length,
					comments: res.data[0].comments,
					commentCount: res.data[0].comments.length
				}, () => {
					console.log(this.state);
				})
			})
	}
	
	//RENDER POST & COMMENT CARDS (SORT BY LATEST)
	renderCards = () => {
		let renderedPosts = this.state.posts.map(post => {
			return <PostCard
				title={post.title}
				sub={post.sub.name}
				author={this.state.name}
				content={post.content}
				upvote={post.upvote}
				downvote={post.downvote}
				date={Date.parse(post.updated_at)}
				key={post.id} />
		})
		let renderedComments = this.state.comments.map(comment => {
			return <CommentCard
				author={this.state.name}
				title={comment.post.title}
				sub={comment.sub.name}
				comment={comment.comment}
				upvote={comment.upvote}
				downvote={comment.downvote}
				date={Date.parse(comment.updated_at)}
				key={comment.id} />
		})
		let renderedCards = renderedPosts.concat(renderedComments);
		renderedCards.sort(function(a, b) {
			return b.props.date - a.props.date;
		})
		return renderedCards;
	}


	render() {
		return (
			<section>
				<ProfileCard
					name={this.state.name}
					description={this.state.description}
					posts={this.state.posts}
					comments={this.state.comments}
					postCount={this.state.postCount}
					commentCount={this.state.commentCount} />
				<ul className='profile__list'>
					{this.renderCards()}
				</ul>
			</section>
		)
	}
}

export default Profile;