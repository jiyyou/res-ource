import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faComments } from '@fortawesome/free-solid-svg-icons';
import './PostCard.scss';
import logo from '../../assets/logo/RES-ource2.png';
import timeSince from '../../helpers/timeSince';

const API_URL = process.env.NODE_ENV === "production" ?
	'https://res-ource.herokuapp.com' :
	'http://localhost:8080';

class PostCard extends React.Component {
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

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			this.setState({
				upvote: this.props.upvote,
				downvote: this.props.downvote
			})
		}
	}

	upvoteHandler = () => {
		axios
			.put(`${API_URL}/api/posts/upvote/${this.props.postId}`)
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
			.put(`${API_URL}/api/posts/downvote/${this.props.postId}`)
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
			<li className="postCard">
				<div className='postCard__header'>
					<Link to={'/post/' + this.props.postId} className='postCard__link'>
						<h3 className="postCard__title">{this.props.title}</h3>
					</Link>
					<Link to={'/sub/' + this.props.subId}>
						<img className='postCard__subimg' src={logo} alt="" />
						<h4 className='postCard__sub'>/{this.props.sub}</h4>
					</Link>
					<Link to={'/profile/' + this.props.userId}>
						<p className='postCard__info'>{this.props.author}, {timeSince(this.props.date)}</p>
					</Link>
				</div>
				<p className='postCard__content'>{this.props.content}</p>
				<div className='postCard__footer'>
					<FontAwesomeIcon onClick={this.upvoteHandler} className='postCard__icon' icon={faArrowAltCircleUp} />
					<p>{this.state.upvote}</p>
					<FontAwesomeIcon onClick={this.downvoteHandler} className='postCard__icon' icon={faArrowAltCircleDown} />
					<p>{this.state.downvote}</p>
					<FontAwesomeIcon className='postCard__icon' icon={faComments} />
					<p>{this.props.commentCount}</p>
				</div>
			</li>
		)
	}
}

export default PostCard;