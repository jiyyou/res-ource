import React from 'react';
import './CommentCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

function CommentCard(props) {
	return (
		<div className="commentCard">
			<div className="commentCard__header">
				<p className="commentCard__desc">
					<span className="commentCard__user">user </span>
					commented on 
					<span className="commentCard__title"> post title</span>
				</p>
				<h3 className="commentCard__sub">/subname</h3>
				<p className="commentCard__text commentCard__text--time">2d</p>
				<FontAwesomeIcon className='commentCard__icon' icon={faArrowAltCircleUp} />
				<p className="commentCard__text">20</p>
				<FontAwesomeIcon className='commentCard__icon' icon={faArrowAltCircleDown} />
				<p className="commentCard__text">20</p>
			</div>
			<p className="commentCard__comment">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus non velit sit amet vehicula. Praesent vitae ultrices
			</p>
		</div>
	)
}

export default CommentCard;