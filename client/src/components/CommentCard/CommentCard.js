import React from 'react';
import './PostCard.scss';

function CommentCard(props) {
	return (
		<div className="commentCard">
			<div class="commentCard__header">
				<p class="commentCard__desc">
					<span class="commentCard__user">USER</span>
					commented on
					<span class="commentCard__title">POST TITLE</span>
				</p>
				<h3 class="commentCard__sub">/SUBNAME</h3>
				<p class="commentCard__timestamp">2 days ago</p>
				<img src="" alt="" class="commentCard__icon" />
				<p class="commentCard__vote">20</p>
				<img src="" alt="" class="commentCard__icon" />
				<p class="commentCard__vote">20</p>
			</div>
			<p class="commentCard__comment">COMMENT</p>
		</div>
	)
}

export default CommentCard;