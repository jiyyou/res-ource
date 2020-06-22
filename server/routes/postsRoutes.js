const express = require('express');
const router = express.Router();
const Comment = require("../model/comment");
const Post = require('../model/post');

require('dotenv').config();
const port = process.env.PORT;

router
	.route('/')
	//GET ALL POSTS
	.get((req, res) => {
		Post
			.fetchAll({ withRelated: ['comment', 'user', 'sub']})
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

//UPVOTE POST
router.put('/upvote/:id', (req, res) => {
	Post.query()
		.where('id', req.params.id)
		.increment('upvote', 1)
		.then(post => {
			res.status(200).send('success');
		})
})

//DOWNVOTE POST
router.put('/downvote/:id', (req,res) => {
	Post.query()
		.where('id', req.params.id)
		.decrement('downvote', 1)
		.then(post => {
			res.status(200).send('success');
		})		
})

router
	.route('/:id')
	//GET POST
	.get((req, res) => {
		Post.where('id', req.params.id)
			.fetchAll({ withRelated: ["comment", "user", 'commentUser', 'sub'] })
			.then(post => {
				res.status(200).json(post);
			});
	})
	.put((req,res) => {


	})



module.exports = router;