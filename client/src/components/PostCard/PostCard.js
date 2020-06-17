import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faComments } from '@fortawesome/free-solid-svg-icons';
import './PostCard.scss';
import logo from '../../assets/logo/RES-ource2.png';

function PostCard(props) {
	return (
		<li className="postCard">
			<div className='postCard__header'>
				<Link to={'/post/' + props.postId} className='postCard__link'>
					<h3 className="postCard__title">{props.title}</h3>
				</Link>
				<Link to={'/sub/' + props.subId}>
					<img className='postCard__subimg' src={logo} alt="" />
					<h4 className='postCard__sub'>/{props.sub}</h4>
				</Link>
				<p className='postCard__info'>{props.author}, time</p>
			</div>
			<Link to={'/post/' + props.postId} className='postCard__link'>
				<p className='postCard__content'>{props.content}</p>
			</Link>
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