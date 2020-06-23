import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './About.scss';

function About() {
	return (
		<section className='about'>
			<div className='about__aboutbox'>
				<h2 className='about__title'>What is RES-ource</h2>
				<p className='about__text'>
					RES-ource (Responsible Resource) is a social platform where users are able to share information and content. To make any contributions or inquiries, all users must log-in with their LinkedIn account to verify their identity. The idea behind this requirement is that as everyone's identity is public, users will be more careful in posting and sharing content as it will damage their credibility. 
				</p>
				<p className='about__text'>
					Users looking for information also have the power to choose which resources they place their trust in as they can check the credibility of other users. By visiting any user's profile page, users are able to get a breakdown of their contributions in each sub and how many upvotes and downvotes they have in each sub.
				</p>

				<h2 className='about__title'>Sub</h2>
				<p className="about__text">
					Browse through different Subs for different topics you would like to find information on. For example, if you would like to find information regarding programming, visit the <span>/programming</span> sub. You can create your own post to share knowledge that will help people browsing through the sub, or the post can be an inquiry asking for help from other users. You can also leave comments to other user's posts.
				</p>

				<h2 className='about__title'>In the works..</h2>
				<ul>
					<li>- Follow/subscribe particular users and subs.</li>
					<li>- Ability to post images and videos.</li>
					<li>- Change avatar picture for users and subs.</li>
					<li>- Upload banner image for sub.</li>
				</ul>
				<h2 className='about__title'>Contact Us</h2>
				<div className='about__contactbox'>
					<FontAwesomeIcon className='about__icon' icon={faUser} />
					<p className='about__contact'>Jiyo You</p>
				</div>
				<div className='about__contactbox'>
					<FontAwesomeIcon className='about__icon' icon={faEnvelope} />
					<p className='about__contact'>ji.yyou@gmail.com</p>	
				</div>
				<div className='about__contactbox'>
					<FontAwesomeIcon className='about__icon' icon={faLinkedin} />
					<a className='about__contact about__contact--link' href='https://www.linkedin.com/in/jiyo-you/'>https://www.linkedin.com/in/jiyo-you/</a>	
				</div>
				

			</div>
		</section>
	)
}

export default About;