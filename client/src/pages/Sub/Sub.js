import React from 'react';
import axios from 'axios';
import PostCard from '../../components/PostCard/PostCard';
import PostForm from '../../components/PostForm/PostForm';
import logo from '../../assets/logo/RES-ource2.png';
import './Sub.scss';

class Sub extends React.Component {
	state = {
		name: '',
		subId: '',
		description: '',
		memberCount: '',
		posts: [],
		postStatus: false,
		postForm: {
			postTitle: '',
			postContent: ''
		},
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
		axios
			.get(`http://localhost:8080/api/sub/${this.props.match.params.id}`)
			.then(res => {
				res.data[0].posts.map(post => {
					let filteredUser = res.data[0].postUsers.filter(user => {
						if (user.id === post.user_id) {
							return user;
						}
						return '';
					})
					let filteredComments = res.data[0].postComments.filter(comment => {
						if (comment.post_id === post.id) {
							return comment;
						}
						return '';
					})
					post.author = filteredUser[0].fName + ' ' + filteredUser[0].lName;
					post.commentCount = filteredComments.length;
					return post;
				})
				this.setState({
					name: res.data[0].name,
					subId: res.data[0].id,
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

	//BUTTON HANDLER FOR TOGGLING POST FORM
	togglePost = e => {
		e.preventDefault();
		if (this.state.isLoggedIn) {
			if (!this.state.postStatus) {
				this.setState({
					postStatus: true
				})
			}
			else {
				this.setState({
					postStatus: false
				})
			}
		}
		else {
			window.alert('Please login to post');
		}
	}

	//SUBMIT HANDLER FOR POST FORM
	submitHandler = e => {
		e.preventDefault();
		this.setState({
			postForm: {
				postTitle: e.target.title.value,
				postContent: e.target.content.value
			}
		}, () => {
			axios
				.post('http://localhost:8080/api/posts/', {
					title: this.state.postForm.postTitle,
					content: this.state.postForm.postContent,
					sub_id: this.state.subId,
					user_id: this.state.currentUser.id
				})
				.then(res => {
					res.data.author = this.state.currentUser.fName + ' ' + this.state.currentUser.lName;
					res.data.commentCount = 0;
					this.setState({
						posts: this.state.posts.concat(res.data)
					})
				})
		})
		e.target.reset();
	}

	render() {
		return (
			<section className="sub">
				<div className="sub__header">
					<div className="sub__banner"></div>
					<div className='sub__headercontent'>
						<img src={logo} alt="" className="sub__avatar" />
						<div className="sub__titlebox">
							<h1 className="sub__title">/{this.state.name}</h1>
							<p className="sub__members">{this.state.memberCount} members</p>
						</div>
						<p className='sub__description'>{this.state.description}</p>
						<button className='sub__button'>+ JOIN</button>
					</div>
				</div>
				<div className='sub__body'>
					<button onClick={this.togglePost} className='sub__button sub__button--inverse'>CREATE POST</button>
					{this.state.postStatus ? <PostForm togglePost={this.togglePost} submitHandler={this.submitHandler} /> : ''}
					<ul className="sub__postlist">
						{this.renderPosts()}
					</ul>
				</div>
			</section>
		)
	}
}

export default Sub;