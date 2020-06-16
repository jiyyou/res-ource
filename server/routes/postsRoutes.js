const express = require('express');
const router = express.Router();
const Comment = require("../model/comment");
const Post = require('../model/post');

router
	.route('/')
	.get((req, res) => {
		Post
			.fetchAll()
			.then(posts => {
				res.status(200).json(posts);
			})
	})
router
	.route('/:id')
	.get((req, res) => {
		Post.where('id', req.params.id)
			.fetchAll({ withRelated: ["comment"] })
			.then(post => {
				res.status(200).json(post);
			});
	})

module.exports = router;
