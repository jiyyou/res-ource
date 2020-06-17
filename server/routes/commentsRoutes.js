const express = require('express');
const router = express.Router();
const Comment = require("../model/comment");
const Post = require('../model/post');

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
			user_id: req.body.user_id
		})
			.save()
			.then(newComment => {
				res.status(201).json(newComment)
			});
	});

module.exports = router;
