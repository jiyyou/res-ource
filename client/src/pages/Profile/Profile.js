import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PostCard from '../../components/PostCard/PostCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import './Profile.scss';

class Profile extends React.Component {
	state = {
		name: '',
		description: '',
		posts: [],
		postCount: '',
		comments: [],
		commentCount: '',
		upvotes: {},
		downvotes: {}
	}

	componentDidMount() {
		axios
			.get(`http://localhost:8080/api/user/${this.props.match.params.id}`)
			.then(res => {
				let totalUpvote = {};
				let totalDownvote = {};
				res.data[0].posts.map(post => {
					//ADD SUB DATA TO POST
					let filteredSub = res.data[0].postSubs.filter(sub => {
						if (sub.id === post.sub_id) {
							return sub;
						}
						return '';
					})
					post.sub = filteredSub[0];
					//COUNTER FOR UPVOTE/DOWNVOTE OF POSTS IN EACH CONTRIBUTED SUB
					!totalUpvote[post.sub.name] ? totalUpvote[post.sub.name] = post.upvote : totalUpvote[post.sub.name] += post.upvote;
					!totalDownvote[post.sub.name] ? totalDownvote[post.sub.name] = post.downvote : totalDownvote[post.sub.name] -= post.downvote;
					//=====================================================
					return post;
				})
				res.data[0].comments.map(comment => {					
					//ADD POST DATA TO COMMENT
					let filteredPosts = res.data[0].commentPosts.filter(filteredPost => {
						if (filteredPost.id === comment.post_id) {
							return filteredPost;
						}
						return '';
					})
					//ADD SUB DATA TO COMMENT
					let filteredSubs = res.data[0].commentSubs.filter(filteredSub => {
						if (filteredSub.id === comment.sub_id) {
							return filteredSub;
						}
						return '';
					})
					comment.post = filteredPosts[0];
					comment.sub = filteredSubs[0];
					// COUNTER FOR UPVOTE/DOWNVOTE OF COMMENTS IN EACH CONTRIBUTED SUB
					!totalUpvote[comment.sub.name] ? totalUpvote[comment.sub.name] = comment.upvote : totalUpvote[comment.sub.name] += comment.upvote;
					!totalDownvote[comment.sub.name] ? totalDownvote[comment.sub.name] = comment.downvote : totalDownvote[comment.sub.name] += comment.downvote;
					// =========================================================
					return comment;
				})
				this.setState({
					name: res.data[0].fName + ' ' + res.data[0].lName,
					description: res.data[0].description,
					posts: res.data[0].posts,
					postCount: res.data[0].posts.length,
					comments: res.data[0].comments,
					commentCount: res.data[0].comments.length,
					upvotes: totalUpvote,
					downvotes: totalDownvote
				}, () => {
					console.log(this.state);
				})
			})
	}
	
	//RENDER POST & COMMENT CARDS (SORT BY LATEST)
	renderCards = () => {
		let renderedPosts = this.state.posts.map(post => {
			return <PostCard
				title={post.title}
				postId={post.id}
				sub={post.sub.name}
				subId={post.sub_id}
				author={this.state.name}
				userId={post.user_id}
				content={post.content}
				upvote={post.upvote}
				downvote={post.downvote}
				date={Date.parse(post.updated_at)}
				key={uuidv4()} />
		})
		let renderedComments = this.state.comments.map(comment => {
			return <CommentCard
				author={this.state.name}
				userId={comment.user_id}
				title={comment.post.title}
				postId={comment.post_id}				
				sub={comment.sub.name}
				subId={comment.sub.id}
				comment={comment.comment}
				upvote={comment.upvote}
				downvote={comment.downvote}
				date={Date.parse(comment.updated_at)}
				key={uuidv4()} />
		})
		let renderedCards = renderedPosts.concat(renderedComments);
		renderedCards.sort(function(a, b) {
			return b.props.date - a.props.date;
		})
		return renderedCards;
	}


	render() {
		return (
			<section>
				<ProfileCard
					name={this.state.name}
					description={this.state.description}
					posts={this.state.posts}
					comments={this.state.comments}
					postCount={this.state.postCount}
					commentCount={this.state.commentCount}
					upvotes={this.state.upvotes}
					downvotes={this.state.downvotes} />
				<ul className='profile__list'>
					{this.renderCards()}
				</ul>
			</section>
		)
	}
}

export default Profile;