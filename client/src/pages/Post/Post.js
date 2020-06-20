import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import PostCard from '../../components/PostCard/PostCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import CommentForm from '../../components/CommentForm/CommentForm';
import './Post.scss';


class Post extends React.Component {
	state = {
		title: "",
		postId: '',
		content: "",
		upvote: "",
		downvote: '',
		author: '',
		userId: '',
		sub: '',
		subId: '',
		comment: [],
		date: '',
		commentStatus: false,
		userComment: '',
		isLoggedIn: false,
		currentUser: {}
	}

	componentDidMount() {
		//CHECK USER AUTHENTICATION
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
		//GET POST DATA
		axios
			.get(`http://localhost:8080/api/posts/${this.props.match.params.id}`)
			.then(res => {
				res.data[0].comment.map(comment => {
					let filteredUser = res.data[0].commentUser.filter(user => {
						if (user.id === comment.user_id) {
							return user;
						}
						return '';
					})
					comment.author = filteredUser[0].fName + " " + filteredUser[0].lName;
					return comment;
				})		
				this.setState({
					title: res.data[0].title,
					postId: res.data[0].id,
					content: res.data[0].content,
					upvote: res.data[0].upvote,
					downvote: res.data[0].downvote,
					author: res.data[0].user.fName + ' ' + res.data[0].user.lName,
					userId: res.data[0].user_id,
					sub: res.data[0].sub.name,
					subId: res.data[0].sub.id,
					comment: res.data[0].comment,
					date: res.data[0].updated_at
				})
			})
			.catch(err => {
				window.alert(err);
			})
	}

	//CREATE COMMENT LIST (SORT BY LATEST)
	renderComments = () => {
		return this.state.comment.map(comment => {
			return <CommentCard
				author={comment.author}
				userId={comment.user_id}
				title={this.state.title}
				postId={comment.post_id}
				sub={this.state.sub}
				subId={this.state.subId}
				upvote={comment.upvote}
				downvote={comment.downvote}
				comment={comment.comment}
				commentId={comment.id}
				date={Date.parse(comment.updated_at)}
				key={uuidv4()} />
		}).sort(function(a,b) {
			return b.props.date - a.props.date;
		})
	}

	//OPEN COMMENT FORM
	buttonHandler = e => {
		e.preventDefault();
		if (this.state.isLoggedIn) {
			if (!this.state.commentStatus) {
				this.setState({
					commentStatus: true
				});
			}
			else {
				this.setState({
					commentStatus: false
				})
			}
		}
		else {
			window.alert('Please login to comment');
		}
	}
	
	//SUBMIT HANDLER FOR COMMENT POST
	submitHandler = e => {
		e.preventDefault();
		this.setState({
			userComment: e.target.comment.value
		}, () => {
			axios
				.post('http://localhost:8080/api/comments/', {
					comment: this.state.userComment,
					post_id: this.state.postId,
					sub_id: this.state.subId,
					user_id: this.state.currentUser.id
				})
				.then(res => {
					res.data.author = this.state.currentUser.fName + ' ' + this.state.currentUser.lName;
					this.setState({
						comment: this.state.comment.concat(res.data)
					})
				})
				.catch(err => {
					window.alert(err);
				})
		});
		e.target.reset();
	}

	render() {
		return (
			<section className='post'>
				<PostCard
					title={this.state.title}
					postId={this.state.postId}
					sub={this.state.sub}
					subId={this.state.subId}
					author={this.state.author}
					userId={this.state.userId}
					content={this.state.content}
					upvote={this.state.upvote}
					downvote={this.state.downvote}
					commentCount={this.state.comment.length}
					date={Date.parse(this.state.date)} />
				<button 
					className={this.state.commentStatus ? 'post__commentbutton post__commentbutton--inverse' : 'post__commentbutton'}
					onClick={this.buttonHandler}>
					LEAVE A COMMENT
				</button>
				{this.state.commentStatus ? <CommentForm submitHandler={this.submitHandler} buttonHandler={this.buttonHandler} /> : ''}
				<ul>
					{this.renderComments()}
				</ul>
			</section>
		)
	}
}

export default Post;