import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PostCard from '../../components/PostCard/PostCard';
import CommentCard from '../../components/CommentCard/CommentCard';

class Profile extends React.Component {
	state = {
		userProfile: {}
	}

	// componentDidMount() {
	// 	const authToken = sessionStorage.getItem('authToken');
		

	// }

	render() {
		return (
			<section>
				<ProfileCard />
			</section>
		)
	}
}

export default Profile;