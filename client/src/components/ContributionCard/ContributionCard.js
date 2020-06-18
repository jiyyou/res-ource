import React from 'react';
import { Link } from "react-router-dom";
import './ContributionCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo/RES-ource2.png';

function ContributionCard(props) {
	return (
		<li className="contributionCard">
			<Link to={'/sub/' + props.sub_id}>
				<img className='contributionCard__avatar' src={logo} alt="" />
				<h3 className='contributionCard__sub'>/{props.sub}</h3>
			</Link>
			<div className="contributionCard__votebox">
				<FontAwesomeIcon className='contributionCard__icon' icon={faArrowAltCircleUp} />
				<p className='contributionCard__count'>{props.totalUpvote}</p>
				<FontAwesomeIcon className='contributionCard__icon' icon={faArrowAltCircleDown} />
				<p className='contributionCard__count'>{props.totalDownvote}</p>
			</div>
		</li>
	)
}

export default ContributionCard;