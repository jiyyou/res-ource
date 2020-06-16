const express = require('express');
const router = express.Router();
const Sub = require("../model/sub");
const Post = require('../model/post');

router
	.route('/')
	.get((req, res) => {
		Sub
			.fetchAll()
			.then(subs => {
				res.status(200).json(subs);
			});
	})
	.post((req, res) => {
		new Sub({
			name: req.body.name,
			description: req.body.description
		})
			.save()
			.then(newSub => {
				res.status(201).json(newSub);
			});
	});

router
	.route('/:id')
	.get((req, res) => {
		Sub.where('id', req.params.id)
			.fetchAll({ withRelated: ['posts']})
			.then(sub => {
				res.status(200).json(sub);
			});
	})
	.post((req, res) => {
		new Post({
			title: req.body.title,
			content: req.body.content,
			sub_id: req.params.id
		})
			.save()
			.then(newPost => {
				console.log(newPost);
				res.status(201).json(newPost);
			})
			.catch(err => {
				console.log(err);
			})
	});

module.exports = router;
