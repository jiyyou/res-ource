import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faComments } from '@fortawesome/free-solid-svg-icons';
import './PostCard.scss';
import logo from '../../assets/logo/RES-ource2.png';

function PostCard(props) {
	return (
		<li className="postCard">
			<div className='postCard__header'>
				<h3 className="postCard__title">Interesting title of article</h3>
				<img className='postCard__subimg' src={logo} alt="" />
				<h4 className='postCard__sub'>/sub</h4>
				<p className='postCard__info'>posted by user, time</p>
			</div>
			<p className='postCard__content'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus non velit sit amet vehicula. Praesent vitae ultrices
			</p>
			<div className='postCard__footer'>
				<FontAwesomeIcon className='postCard__icon' icon={faArrowAltCircleUp} />
				<p>10</p>
				<FontAwesomeIcon className='postCard__icon' icon={faArrowAltCircleDown} />
				<p>10</p>
				<FontAwesomeIcon className='postCard__icon' icon={faComments} />
				<p>10</p>
			</div>
		</li>
	)
}

export default PostCard;