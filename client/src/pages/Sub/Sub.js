import React from 'react';

class Sub extends React.Component {
	state = {
		userProfile: {}
	}

	// componentDidMount() {
	// 	const authToken = sessionStorage.getItem('authToken');
		

	// }

	render() {
		return (
			<section className="sub">
				<div class="sub__header">
					<img src="" alt="" class="sub__avatar" />
					<div class="sub__titlebox">
						<h1 class="sub__title">/SUB</h1>
						<p class="sub__members">1000 members</p>
					</div>
					<button>JOIN</button>
				</div>
				<button>CREATE POST</button>
				<ul class="sub__postlist">
					
				</ul>
			</section>
		)
	}
}

export default Sub;