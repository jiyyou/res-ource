import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PostCard from '../../components/PostCard/PostCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import './Profile.scss';

const API_URL = process.env.NODE_ENV === "production" ?
	'https://res-ource.herokuapp.com' :
	'http://localhost:8080';

class Profile extends React.Component {
	state = {
		name: '',
		userId: '',
		description: '',
		posts: [],
		postCount: '',
		comments: [],
		commentCount: '',
		upvotes: {},
		downvotes: {},
		isLoggedIn: false,
		currentUser: {},
		editToggle: false
	}

	componentDidMount() {
		//CHECK USER AUTHENTICATION
		axios
			.get(`${API_URL}/auth/check-auth`, { withCredentials: true })
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
		//GET USER INFO
		axios
			.get(`${API_URL}/api/user/${this.props.match.params.id}`)
			.then(res => {
				let totalUpvote = {};
				let totalDownvote = {};
				res.data[0].posts.map(post => {
					//ADD SUB DATA TO POST
					let filteredSub = res.data[0].postSubs.filter(sub => {
						if (sub.id === post.sub_id) {
							return sub;
						}
						return '';
					})
					post.sub = filteredSub[0];
					//ADD COMMENT DATA TO POST
					let filteredComments = res.data[0].postComments.filter(comment => {
						if (post.id === comment.post_id) {
							return comment;
						}
						return '';
					})
					post.commentCount = filteredComments.length;
					//COUNTER FOR UPVOTE/DOWNVOTE OF POSTS IN EACH CONTRIBUTED SUB
					!totalUpvote[`${post.sub.name}_${post.sub.id}`] ? totalUpvote[`${post.sub.name}_${post.sub.id}`] = post.upvote : totalUpvote[`${post.sub.name}_${post.sub.id}`] += post.upvote;
					!totalDownvote[`${post.sub.name}_${post.sub.id}`] ? totalDownvote[`${post.sub.name}_${post.sub.id}`] = post.downvote : totalDownvote[`${post.sub.name}_${post.sub.id}`] -= post.downvote;
					//=====================================================
					return post;
				})
				res.data[0].comments.map(comment => {					
					//ADD POST DATA TO COMMENT
					let filteredPosts = res.data[0].commentPosts.filter(filteredPost => {
						if (filteredPost.id === comment.post_id) {
							return filteredPost;
						}
						return '';
					})
					//ADD SUB DATA TO COMMENT
					let filteredSubs = res.data[0].commentSubs.filter(filteredSub => {
						if (filteredSub.id === comment.sub_id) {
							return filteredSub;
						}
						return '';
					})
					comment.post = filteredPosts[0];
					comment.sub = filteredSubs[0];
					// COUNTER FOR UPVOTE/DOWNVOTE OF COMMENTS IN EACH CONTRIBUTED SUB
					!totalUpvote[`${comment.sub.name}_${comment.sub.id}`] ? totalUpvote[`${comment.sub.name}_${comment.sub.id}`] = comment.upvote : totalUpvote[`${comment.sub.name}_${comment.sub.id}`] += comment.upvote;
					!totalDownvote[`${comment.sub.name}_${comment.sub.id}`] ? totalDownvote[`${comment.sub.name}_${comment.sub.id}`] = comment.downvote : totalDownvote[`${comment.sub.name}_${comment.sub.id}`] += comment.downvote;
					// =========================================================
					return comment;
				})
				this.setState({
					name: res.data[0].fName + ' ' + res.data[0].lName,
					userId: res.data[0].id,
					description: res.data[0].description,
					posts: res.data[0].posts,
					postCount: res.data[0].posts.length,
					comments: res.data[0].comments,
					commentCount: res.data[0].comments.length,
					upvotes: totalUpvote,
					downvotes: totalDownvote
				})
			})
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
			axios
			.get(`${API_URL}/api/user/${this.props.match.params.id}`)
			.then(res => {
				let totalUpvote = {};
				let totalDownvote = {};
				res.data[0].posts.map(post => {
					//ADD SUB DATA TO POST
					let filteredSub = res.data[0].postSubs.filter(sub => {
						if (sub.id === post.sub_id) {
							return sub;
						}
						return '';
					})
					post.sub = filteredSub[0];
					//ADD COMMENT DATA TO POST
					let filteredComments = res.data[0].postComments.filter(comment => {
						if (post.id === comment.post_id) {
							return comment;
						}
						return '';
					})
					post.commentCount = filteredComments.length;
					//COUNTER FOR UPVOTE/DOWNVOTE OF POSTS IN EACH CONTRIBUTED SUB
					!totalUpvote[`${post.sub.name}_${post.sub.id}`] ? totalUpvote[`${post.sub.name}_${post.sub.id}`] = post.upvote : totalUpvote[`${post.sub.name}_${post.sub.id}`] += post.upvote;
					!totalDownvote[`${post.sub.name}_${post.sub.id}`] ? totalDownvote[`${post.sub.name}_${post.sub.id}`] = post.downvote : totalDownvote[`${post.sub.name}_${post.sub.id}`] -= post.downvote;
					//=====================================================
					return post;
				})
				res.data[0].comments.map(comment => {					
					//ADD POST DATA TO COMMENT
					let filteredPosts = res.data[0].commentPosts.filter(filteredPost => {
						if (filteredPost.id === comment.post_id) {
							return filteredPost;
						}
						return '';
					})
					//ADD SUB DATA TO COMMENT
					let filteredSubs = res.data[0].commentSubs.filter(filteredSub => {
						if (filteredSub.id === comment.sub_id) {
							return filteredSub;
						}
						return '';
					})
					comment.post = filteredPosts[0];
					comment.sub = filteredSubs[0];
					// COUNTER FOR UPVOTE/DOWNVOTE OF COMMENTS IN EACH CONTRIBUTED SUB
					!totalUpvote[`${comment.sub.name}_${comment.sub.id}`] ? totalUpvote[`${comment.sub.name}_${comment.sub.id}`] = comment.upvote : totalUpvote[`${comment.sub.name}_${comment.sub.id}`] += comment.upvote;
					!totalDownvote[`${comment.sub.name}_${comment.sub.id}`] ? totalDownvote[`${comment.sub.name}_${comment.sub.id}`] = comment.downvote : totalDownvote[`${comment.sub.name}_${comment.sub.id}`] += comment.downvote;
					// =========================================================
					return comment;
				})
				this.setState({
					name: res.data[0].fName + ' ' + res.data[0].lName,
					userId: res.data[0].id,
					description: res.data[0].description,
					posts: res.data[0].posts,
					postCount: res.data[0].posts.length,
					comments: res.data[0].comments,
					commentCount: res.data[0].comments.length,
					upvotes: totalUpvote,
					downvotes: totalDownvote
				})
			})
		}
	}
	
	//RENDER POST & COMMENT CARDS (SORT BY LATEST)
	renderCards = () => {
		let renderedPosts = this.state.posts.map(post => {
			return <PostCard
				title={post.title}
				postId={post.id}
				sub={post.sub.name}
				subId={post.sub_id}
				author={this.state.name}
				userId={post.user_id}
				content={post.content}
				upvote={post.upvote}
				downvote={post.downvote}
				commentCount={post.commentCount}
				date={Date.parse(post.updated_at)}
				key={uuidv4()} />
		})
		let renderedComments = this.state.comments.map(comment => {
			return <CommentCard
				author={this.state.name}
				userId={comment.user_id}
				title={comment.post.title}
				postId={comment.post_id}				
				sub={comment.sub.name}
				subId={comment.sub.id}
				comment={comment.comment}
				commentId={comment.id}
				upvote={comment.upvote}
				downvote={comment.downvote}
				date={Date.parse(comment.updated_at)}
				key={uuidv4()} />
		})
		let renderedCards = renderedPosts.concat(renderedComments);
		renderedCards.sort(function(a, b) {
			return b.props.date - a.props.date;
		})
		return renderedCards;
	}

	//SUBMIT HANDLER FOR EDIT PROFILE DESCRIPTION
	submitHandler = e => {
		e.preventDefault();
		this.setState({
			description: e.target.description.value
		}, () => {
			axios
				.put(`${API_URL}/api/user/${this.state.userId}`, {
					description: this.state.description
				})
				.then(res => {
					console.log('Success')
					this.setState({
						editToggle: false
					})
				})
				.catch(err => {
					window.alert(err);
				})

		})
	}

	//TOGGLE EDIT FORM 
	toggleEdit = (e) => {
		e.preventDefault();
		if (this.state.editToggle) {
			this.setState({
				editToggle: false
			})
		}
		else {
			this.setState({
				editToggle: true
			})
		}
	}


	render() {
		return (
			<section className='profile'>
				<ProfileCard
					name={this.state.name}
					userId={this.state.userId}
					description={this.state.description}
					posts={this.state.posts}
					comments={this.state.comments}
					postCount={this.state.postCount}
					commentCount={this.state.commentCount}
					upvotes={this.state.upvotes}
					downvotes={this.state.downvotes}
					currentUser={this.state.currentUser}
					submitHandler={this.submitHandler}
					toggleEdit={this.toggleEdit}
					editToggle={this.state.editToggle} />
				<ul className='profile__list'>
					{this.renderCards()}
				</ul>
			</section>
		)
	}
}

export default Profile;