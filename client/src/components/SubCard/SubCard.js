import React from 'react';
import { Link } from "react-router-dom";
import './SubCard.scss';
import logo from '../../assets/logo/RES-ource2.png';

function SubCard(props) {
	return (
		<div className="subCard">
			<div className="subCard__banner"></div>
			<div className="subCard__textbox">
				<img src={logo} alt="" className="subCard__avatar" />
				<div className="subCard__titlebox">
					<Link to={'/sub/' + props.subId}>
						<h2 className="subCard__title">/{props.title}</h2>
					</Link>
					<p className="subCard__membercount">{props.memberCount} members</p>
				</div>
				<button className='subCard__join'>+ JOIN</button>
				<Link to={'/sub/' + props.subId}>
					<p className="subCard__description">{props.description}</p>
				</Link>				
			</div>
		</div>
	)
}

export default SubCard;