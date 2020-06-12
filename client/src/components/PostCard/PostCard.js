import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faComments } from '@fortawesome/free-solid-svg-icons';
import './PostCard.scss';

function PostCard(props) {
	return (
		<li className="postCard">
			<div className='postCard__header'>
				<h3 className="postCard__title">Interesting title of article</h3>
				<img className='postCard__subimg' src="" alt="" />
				<h4 className='postCard__sub'>/sub</h4>
				<p className='postCard__info'>posted by user, time</p>
			</div>
			<div className='postCard__contentbox'>
				CONTENT
			</div>
			<div className='postCard__footer'>
				<FontAwesomeIcon className='postCard__icon' icon={faArrowAltCircleUp} />
				<p>#</p>
				<FontAwesomeIcon className='postCard__icon' icon={faArrowAltCircleDown} />
				<p>#</p>
				<FontAwesomeIcon className='postCard__icon' icon={faComments} />
				<p>#</p>
			</div>
		</li>
	)
}

export default PostCard;