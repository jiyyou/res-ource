import React from 'react';

function ProfileCard(props) {
	return (
		<div className="profileCard">
			<div class="profileCard__banner"></div>
			<div class="profileCard__profilebox">
				<img src="" alt="" class="profileCard__avatar" />
				<h2 class="profileCard__name">FIRST NAME, LAST NAME</h2>
				<p class="profileCard__username">/username</p>
				<button>FOLLOW</button>
				<img class='profileCard__icon' src="" alt="" />
			</div>
			<p class="profileCard__about">INTRODUCTION</p>
			<div class="profileCard__userbox">
				<img src="" alt="" class="profileCard__icon" />
				<p class="profileCard__vote">10</p>
				<img src="" alt="" class="profileCard__icon" />
				<p class="profileCard__vote">10</p>
			</div>

		</div>
	)
}

export default ProfileCard;