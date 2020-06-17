import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faComments } from '@fortawesome/free-solid-svg-icons';
import './PostCard.scss';
import logo from '../../assets/logo/RES-ource2.png';

function PostCard(props) {
	return (
		<li className="postCard">
			<Link to={'/post/' + props.postId}>
				<div className='postCard__header'>
					<h3 className="postCard__title">{props.title}</h3>
					<img className='postCard__subimg' src={logo} alt="" />
					<h4 className='postCard__sub'>/{props.sub}</h4>
					<p className='postCard__info'>{props.author}, time</p>
				</div>
			</Link>
			<p className='postCard__content'>{props.content}</p>
			<div className='postCard__footer'>
				<FontAwesomeIcon className='postCard__icon' icon={faArrowAltCircleUp} />
				<p>{props.upvote}</p>
				<FontAwesomeIcon className='postCard__icon' icon={faArrowAltCircleDown} />
				<p>{props.downvote}</p>
				<FontAwesomeIcon className='postCard__icon' icon={faComments} />
				<p>{props.commentCount}</p>
			</div>
		</li>
	)
}

export default PostCard;