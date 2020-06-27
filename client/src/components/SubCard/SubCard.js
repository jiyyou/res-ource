import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './SubCard.scss';
import logo from '../../assets/logo/RES-ource2.png';

const API_URL = process.env.NODE_ENV === "production" ?
	'https://res-ource.herokuapp.com' :
	'http://localhost:8080';

function SubCard(props) {
	//BUTTON HANDLER FOR SUBSCRIBE
	const buttonHandler = () => {
		axios
			.post(`${API_URL}/api/sub/subscribe/${props.subId}/`, {
				sub_id: props.subId,
				user_id: props.currentUser.id
			})
			.then(res => {
				console.log('success');
			})
	}

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
				<button onClick={buttonHandler} className='subCard__join'>+ JOIN</button>
				<Link to={'/sub/' + props.subId}>
					<p className="subCard__description">{props.description}</p>
				</Link>				
			</div>
		</div>
	)
}

export default SubCard;