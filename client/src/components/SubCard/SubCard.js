import React from 'react';
import './SubCard.scss';
import logo from '../../assets/logo/RES-ource2.png';

function SubCard(props) {
	return (
		<div className="subCard">
			<div className="subCard__banner"></div>
			<div className="subCard__textbox">
				<img src={logo} alt="" className="subCard__avatar" />
				<div className="subCard__titlebox">
					<h2 className="subCard__title">/subname</h2>
					<p className="subCard__membercount">100 members</p>
				</div>
				<button className='subCard__join'>+ JOIN</button>
				<p className="subCard__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus non velit sit amet vehicula. Praesent vitae ultrices</p>
			</div>
		</div>
	)
}

export default SubCard;