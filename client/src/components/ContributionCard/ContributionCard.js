import React from 'react';
import './ContributionCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo/RES-ource2.png';

function ContributionCard(props) {
	return (
		<li className="contributionCard">
			<img className='contributionCard__avatar' src={logo} alt="" />
			<h3 className='contributionCard__sub'>/subName</h3>
			<div className="contributionCard__votebox">
				<FontAwesomeIcon className='contributionCard__icon' icon={faArrowAltCircleUp} />
				<p className='contributionCard__count'>10</p>
				<FontAwesomeIcon className='contributionCard__icon' icon={faArrowAltCircleDown} />
				<p className='contributionCard__count'>10</p>
			</div>
		</li>
	)
}

export default ContributionCard;