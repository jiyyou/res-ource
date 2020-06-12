import React from 'react';
import './ProfileCard.scss';
import logo from '../../assets/logo/RES-ource2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

function ProfileCard(props) {
	return (
		<div className="profileCard">
			<div className="profileCard__banner"></div>
			<div className="profileCard__profilebox">
				<img src={logo} alt="" className="profileCard__avatar" />
				<div className='profileCard__userbox'>
					<h2 className="profileCard__name">fName, lName</h2>
					<p className="profileCard__username">/username</p>
				</div>
				<button className='profileCard__follow'>FOLLOW</button>
				<img className='profileCard__icon' src="" alt="" />
			</div>
			<p className="profileCard__about">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus non velit sit amet vehicula. Praesent vitae ultrices
			</p>
			<div className="profileCard__footer">
				<FontAwesomeIcon className='profileCard__icon' icon={faArrowAltCircleUp} />
				<p className="profileCard__vote">10</p>
				<FontAwesomeIcon className='profileCard__icon' icon={faArrowAltCircleDown} />
				<p className="profileCard__vote">10</p>
			</div>

		</div>
	)
}

export default ProfileCard;