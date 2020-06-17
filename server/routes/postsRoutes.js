const express = require('express');
const router = express.Router();
const Comment = require("../model/comment");
const Post = require('../model/post');

router
	.route('/')
	//GET ALL POSTS
	.get((req, res) => {
		Post
			.fetchAll({ withRelated: ['comment', 'user']})
			.then(posts => {
				res.status(200).json(posts);
			})
	})
	//CREATE NEW POST
	.post((req, res) => {
		new Post({
			title: req.body.title,
			content: req.body.content,
			sub_id: req.body.sub_id,
			user_id: req.body.user_id
		})
			.save()
			.then(newPost => {
				res.status(201).json(newPost);
			})
			.catch(err => {
				console.log(err);
			})
	});

router
	.route('/:id')
	//GET POST
	.get((req, res) => {
		Post.where('id', req.params.id)
			.fetchAll({ withRelated: ["comment", "user", 'commentUser'] })
			.then(post => {
				res.status(200).json(post);
			});
	})

module.exports = router;