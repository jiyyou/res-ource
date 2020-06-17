import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faComments } from '@fortawesome/free-solid-svg-icons';
import PostCard from '../../components/PostCard/PostCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import logo from '../../assets/logo/RES-ource.png';
import './Post.scss';


class Post extends React.Component {
	state = {
		title: "",
		content: "",
		upvote: "",
		downvote: '',
		author: '',
		sub: '',
		comment: [],
	}

	componentDidMount() {
		axios
			.get(`http://localhost:8080/api/posts/${this.props.match.params.id}`)
			.then(res => {
				let commentWithUser = res.data[0].comment.map(comment => {
					let filteredUser = res.data[0].commentUser.filter(user => {
						if (user.id === comment.user_id) {
							return user;
						}
					})
					comment.author = filteredUser[0].fName + " " + filteredUser[0].lName;
					return comment;
				})		
				this.setState({
					title: res.data[0].title,
					content: res.data[0].content,
					upvote: res.data[0].upvote,
					downvote: res.data[0].downvote,
					author: res.data[0].user.fName + ' ' + res.data[0].user.lName,
					sub: res.data[0].sub.name,
					comment: res.data[0].comment
				})
			})
			.catch(err => {
				window.alert(err);
			})
	}

	//CREATE COMMENT LIST
	renderComments = () => {
		return this.state.comment.map(comment => {
			return <CommentCard
				author={comment.author}
				title={this.state.title}
				sub={this.state.sub}
				upvote={comment.upvote}
				downvote={comment.downvote}
				comment={comment.comment}
				key={comment.id} />
		})
	}

	render() {
		return (
			<section className='post'>
				<PostCard
					title={this.state.title}
					sub={this.state.sub}
					author={this.state.author}
					content={this.state.content}
					upvote={this.state.upvote}
					downvote={this.state.downvote}
					commentCount={this.state.comment.length} />
				<ul>
					{this.renderComments()}
				</ul>
			</section>
		)
	}
}

export default Post;