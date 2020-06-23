import React from 'react';
import './ProfileCard.scss';
import logo from '../../assets/logo/RES-ource2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import ContributionCard from '../ContributionCard/ContributionCard';

class ProfileCard extends React.Component {

	//RENDER CONTRIBUTION CARDS WITH UPVOTES/DOWNVOTES FOR EACH SUB
	renderContribution = () => {
		let upvoteKeys = Object.keys(this.props.upvotes);
		return upvoteKeys.map(sub => {
			return <ContributionCard
				sub={sub.split('_')[0]}
				sub_id={sub.split('_')[1]}
				totalUpvote={this.props.upvotes[sub]}
				totalDownvote={this.props.downvotes[sub]}
				key={uuidv4()} />
		});
	}

	//GET USER TOTAL UPVOTES/DOWNVOTES
	sumOfVotes = (obj) => {
		let arrayOfValues = Object.values(obj);
		let totalVotes = 0;
		arrayOfValues.forEach(vote => {
			totalVotes += vote;
		})
		return totalVotes;
	}

	render() {
		return (
			<div className="profileCard">
				<div className="profileCard__banner"></div>
				<div className="profileCard__profilebox">
					<img src={logo} alt="" className="profileCard__avatar" />
					<div className='profileCard__userbox'>
						<h2 className="profileCard__name">{this.props.name}</h2>
						<p className="profileCard__username">/username</p>
					</div>
					{this.props.currentUser.id === this.props.userId ? 
						<button onClick={this.props.toggleEdit} className='profileCard__follow'>EDIT</button> :
						<button className='profileCard__follow'>FOLLOW</button>
					}
				</div>
				{!this.props.editToggle ?
					<p className="profileCard__about">{this.props.description}</p> :
					<form onSubmit={this.props.submitHandler}>
						<textarea className='profileCard__input' name="description" defaultValue={this.props.description}></textarea>
						<button className='profileCard__follow'>SUBMIT</button>
					</form>
				}
				<div className="profileCard__contribution">				
					<h3 className="profileCard__subtitle">Contributions</h3>
					<div className="profileCard__contbox">
						<p className="profileCard__conttext">Posts: {this.props.postCount}</p>
						<p className="profileCard__conttext">Comments: {this.props.commentCount}</p>
					</div>
					<ul className="profileCard__contlist">
						{this.renderContribution()}
					</ul>
				</div>
				<div className="profileCard__footer">
					<FontAwesomeIcon className='profileCard__icon' icon={faArrowAltCircleUp} />
					<p className="profileCard__vote">{this.sumOfVotes(this.props.upvotes)}</p>
					<FontAwesomeIcon className='profileCard__icon' icon={faArrowAltCircleDown} />
					<p className="profileCard__vote">{this.sumOfVotes(this.props.downvotes)}</p>

				</div>

			</div>
		)
	}
}

export default ProfileCard;