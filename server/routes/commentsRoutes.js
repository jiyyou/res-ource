const express = require('express');
const router = express.Router();
const Comment = require("../model/comment");
const Post = require('../model/post');

router
	.route('/')
	.get((req, res) => {
		Comment.where(req.query)
			.fetchAll()
			.then(comment => {
				res.status(200).json(comment);
			});
	})

module.exports = router;
