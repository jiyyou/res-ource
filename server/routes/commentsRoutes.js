const express = require('express');
const router = express.Router();
const Comment = require("../model/comment");
const Post = require('../model/post');
const Sub = require('../model/sub');

router
	.route('/')
	//GET ALL COMMENTS
	.get((req, res) => {
		Comment
			.fetchAll({ withRelated: ['user', 'post']})
			.then(comment => {
				res.status(200).json(comment);
			});
	})
	//CREATE NEW COMMENT
	.post((req, res) => {
		new Comment({
			comment: req.body.comment,
			post_id: req.body.post_id,
			user_id: req.body.user_id,
			sub_id: req.body.sub_id
		})
			.save()
			.then(newComment => {
				res.status(201).json(newComment)
			});
	});

//UPVOTE COMMENT
router.put('/upvote/:id', (req, res) => {
	Comment.query()
		.where('id', req.params.id)
		.increment('upvote', 1)
		.then(comment => {
			res.sendStatus(200).send(comment);
		})
})

//DOWNVOTE COMMENT
router.put('/downvote/:id', (req,res) => {
	Comment.query()
		.where('id', req.params.id)
		.decrement('downvote', 1)
		.then(comment => {
			res.sendStatus(200).send(comment);
		})		
})

module.exports = router;
