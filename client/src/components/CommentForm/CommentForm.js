import React from 'react';
import './CommentForm.scss';

function CommentForm(props) {
	return (
		<form onSubmit={props.submitHandler} className='comment-form'>
			<label htmlFor="comment" className='comment-form__label'>Leave a comment..</label>
			<textarea name="comment" className="comment-form__input" placeholder='What would you like to say?'></textarea>
			<button type='submit' className='comment-form__button'>SUBMIT</button>
			<button onClick={props.buttonHandler} className='comment-form__button comment-form__button--inverse'>CANCEL</button>
		</form>
	)
}

export default CommentForm;