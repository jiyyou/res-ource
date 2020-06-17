import React from 'react';
import './ProfileCard.scss';
import logo from '../../assets/logo/RES-ource2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContributionCard from '../ContributionCard/ContributionCard';

function ProfileCard(props) {
	console.log(props);
	return (
		<div className="profileCard">
			<div className="profileCard__banner"></div>
			<div className="profileCard__profilebox">
				<img src={logo} alt="" className="profileCard__avatar" />
				<div className='profileCard__userbox'>
					<h2 className="profileCard__name">{props.name}</h2>
					<p className="profileCard__username">/username</p>
				</div>
				<button className='profileCard__follow'>FOLLOW</button>
			</div>
			<p className="profileCard__about">{props.description}</p>
			<div className="profileCard__contribution">				
				<h3 className="profileCard__subtitle">Contributions</h3>
				<div className="profileCard__contbox">
					<p className="profileCard__conttext">Posts: {props.postCount}</p>
					<p className="profileCard__conttext">Comments: {props.commentCount}</p>
				</div>
				<ul className="profileCard__contlist">
					<ContributionCard />
					<ContributionCard />
					<ContributionCard />
				</ul>
			</div>
			<div className="profileCard__footer">
				<FontAwesomeIcon className='profileCard__icon' icon={faArrowAltCircleUp} />
				<p className="profileCard__vote">10</p>
				<FontAwesomeIcon className='profileCard__icon' icon={faArrowAltCircleDown} />
				<p className="profileCard__vote">10</p>
				<div className="profileCard__linkedin">
					<FontAwesomeIcon className='profileCard__icon' icon={faLinkedin} />
				</div>
			</div>

		</div>
	)
}

export default ProfileCard;