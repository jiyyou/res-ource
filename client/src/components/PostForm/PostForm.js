import React from 'react';
import './PostForm.scss';

function PostForm(props) {
	return (
		<form onSubmit={props.submitHandler} className='post-form'>
			<label className='post-form__label' for="title" required>Title of Post</label>
			<input className='post-form__input' name='title' type="text"/>
			<label className='post-form__label' for="content">Post Content</label>
			<textarea className='post-form__input post-form__input--area' name="content"></textarea>
			<button type='submit' className='post-form__button'>SUBMIT</button>
			<button onClick={props.togglePost} className='post-form__button post-form__button--inverse'>CANCEL</button>
		</form>
	)
}

export default PostForm;