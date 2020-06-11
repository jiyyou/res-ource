import React from 'react';

function PostCard(props) {
	return (
		<div className="postCard">
			<div className='postCard__titlebox'>
				<h3 className="postCard__title">Test</h3>
				<img className='postCard__subimg' src="" alt="" />
				<h4 className='postCard__sub'>/sub</h4>
				<p className='postCard__info'>posted by USER, TIMESTAMP</p>
			</div>
			<div className='postCard__contentbox'>
				CONTENT
			</div>
			<div className='postCard__footer'>
				<img className='postCard__icon' src="" alt="" />
				<p># Up</p>
				<img className='postCard__icon' src="" alt="" />
				<p># Down</p>
				<img className='postCard__icon' src="" alt="" />
				<p># of comments</p>
			</div>
		</div>
	)
}

export default PostCard;