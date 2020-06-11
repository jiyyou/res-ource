import React from 'react';

class Header extends React.Component {
	state = {
		loggedIn: false,
		userProfile: {}
	}

	// componentDidMount() {
	// 	const authToken = sessionStorage.getItem('authToken');


	// }

	render() {
		return (
			<header>
				<h1>TEST</h1>
			</header>
		)
	}
}

export default Header;