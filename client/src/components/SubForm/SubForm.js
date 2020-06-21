import React from 'react';
import './SubForm.scss';

function SubForm(props) {
	return (
		<form className='subForm' onSubmit={props.submitHandler}>
			<label className='subForm__label' for="title">Title of Sub</label>
			<input className='subForm__input' name='title' type="text" required />
			<label className='subForm__label' for="description">Description of Sub</label>
			<textarea className='subForm__txtarea' name="description"></textarea>
			<button className='subForm__button'>SUBMIT</button>
		</form>
	)
}

export default SubForm;