import React from 'react';
import './CommentCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo/RES-ource2.png';

function CommentCard(props) {
	return (
		<div className="commentCard">
			<div class="commentCard__header">
				<p class="commentCard__desc">
					<span class="commentCard__user">user </span>
					commented on 
					<span class="commentCard__title"> post title</span>
				</p>
				<h3 class="commentCard__sub">/subname</h3>
				<p class="commentCard__text commentCard__text--time">2d</p>
				<FontAwesomeIcon className='commentCard__icon' icon={faArrowAltCircleUp} />
				<p class="commentCard__text">20</p>
				<FontAwesomeIcon className='commentCard__icon' icon={faArrowAltCircleDown} />
				<p class="commentCard__text">20</p>
			</div>
			<p class="commentCard__comment">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus non velit sit amet vehicula. Praesent vitae ultrices
			</p>
		</div>
	)
}

export default CommentCard;