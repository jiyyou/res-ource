import React from 'react';
import axios from 'axios';
import './CommentCard.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import timeSince from '../../helpers/timeSince';

function CommentCard(props) {

	const upvoteHandler = () => {
		axios
			.put(`http://localhost:8080/api/comments/upvote/${props.commentId}`)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			})
	}

	const downvoteHandler = () => {
		axios
			.put(`http://localhost:8080/api/comments/downvote/${props.commentId}`)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			})
	}	

	return (
		<div className="commentCard">
			<div className="commentCard__header">
				<p className="commentCard__desc">
					<Link to={'/profile/' + props.userId}>
						<span className="commentCard__user">{props.author + ' '}</span>
					</Link>
					commented on
					<Link to={'/post/' + props.postId}>
						<span className="commentCard__title">{' ' + props.title}</span>
					</Link>
				</p>
				<Link to={'/sub/' + props.subId}>
					<h3 className="commentCard__sub">/{props.sub}</h3>
				</Link>
				<p className="commentCard__text commentCard__text--time">{timeSince(props.date)}</p>
				<FontAwesomeIcon onClick={upvoteHandler} className='commentCard__icon' icon={faArrowAltCircleUp} />
				<p className="commentCard__text">{props.upvote}</p>
				<FontAwesomeIcon onClick={downvoteHandler} className='commentCard__icon' icon={faArrowAltCircleDown} />
				<p className="commentCard__text">{props.downvote}</p>
			</div>
			<p className="commentCard__comment">{props.comment}</p>
		</div>
	)
}

export default CommentCard;