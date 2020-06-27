import React from 'react';
import axios from 'axios';
import './CommentCard.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import timeSince from '../../helpers/timeSince';

const API_URL = process.env.NODE_ENV === "production" ?
	'https://res-ource.herokuapp.com' :
	'http://localhost:8080';

class CommentCard extends React.Component {
	state = {
		upvote: '',
		downvote: ''
	}

	componentDidMount() {
		this.setState({
			upvote: this.props.upvote,
			downvote: this.props.downvote
		})
	}

	upvoteHandler = () => {
		axios
			.put(`${API_URL}/api/comments/upvote/${this.props.commentId}`)
			.then(() => {
				this.setState({
					upvote: this.state.upvote + 1
				})
			})
			.catch(err => {
				window.alert(err);
			})
	}

	downvoteHandler = () => {
		axios
			.put(`${API_URL}/api/comments/downvote/${this.props.commentId}`)
			.then(() => {
				this.setState({
					downvote: this.state.downvote - 1
				})
			})
			.catch(err => {
				window.alert(err);
			})
	}	

	render() {
		return (
			<div className="commentCard">
				<div className="commentCard__header">
					<p className="commentCard__desc">
						<Link to={'/profile/' + this.props.userId}>
							<span className="commentCard__user">{this.props.author + ' '}</span>
						</Link>
						commented on
						<Link to={'/post/' + this.props.postId}>
							<span className="commentCard__title">{' ' + this.props.title}</span>
						</Link>
					</p>
					<Link to={'/sub/' + this.props.subId}>
						<h3 className="commentCard__sub">/{this.props.sub}</h3>
					</Link>
					<p className="commentCard__text commentCard__text--time">{timeSince(this.props.date)}</p>
					<FontAwesomeIcon onClick={this.upvoteHandler} className='commentCard__icon' icon={faArrowAltCircleUp} />
					<p className="commentCard__text">{this.state.upvote}</p>
					<FontAwesomeIcon onClick={this.downvoteHandler} className='commentCard__icon' icon={faArrowAltCircleDown} />
					<p className="commentCard__text">{this.state.downvote}</p>
				</div>
				<p className="commentCard__comment">{this.props.comment}</p>
			</div>
		)
	}
}
export default CommentCard;