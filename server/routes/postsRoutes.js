const express = require('express');
const router = express.Router();
const Comment = require("../model/comment");
const Post = require('../model/post');
const PostVote = require('../model/postVote');
const fileupload = require('express-fileupload');

require('dotenv').config();
const port = process.env.PORT;

const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_KEY,
	api_secret: process.env.CLOUD_SECRET
})

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

// router.post('/photo/', (req, res) => {
// 	console.log(req.body);
// 	console.log(req.body.image);
// 	const file = req.body.image;
// 	cloudinary.uploader.upload(file, function(err, results) {
// 		console.log(results);
// 		console.log(err);
// 	})
// })

//UPVOTE POST
router.put('/upvote/:id', (req, res) => {
	Post.query()
		.where('id', req.params.id)
		.increment('upvote', 1)
		.then(post => {
			res.status(200).send(post);
		})
})

//DOWNVOTE POST
router.put('/downvote/:id', (req,res) => {
	Post.query()
		.where('id', req.params.id)
		.decrement('downvote', 1)
		.then(post => {
			res.status(200).send(post);
		})		
})

router.put('/upvote/:id', (req, res) => {
	Post.query()
		.where('id', req.params.id)
		.increment('upvote', 1)
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