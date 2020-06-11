import React from 'react';

function SubCard(props) {
	return (
		<div className="subCard">
			<div class="subCard__banner"></div>
			<div class="subCard__header">
				<img src="" alt="" class="subCard__avatar" />
				<div class="subCard__titlebox">
					<h2 class="subCard__title">TITLE</h2>
					<p class="subCard__membercount">1234</p>
				</div>
				<p class="subCard__description">DESCRIPTION</p>
				<button>JOIN</button>
			</div>
		</div>
	)
}

export default SubCard;