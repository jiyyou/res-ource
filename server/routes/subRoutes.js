const express = require('express');
const router = express.Router();
const Sub = require("../model/sub");
const Post = require('../model/post');

router
	.route('/')
	//GET ALL SUB
	.get((req, res) => {
		Sub
			.fetchAll()
			.then(subs => {
				res.status(200).json(subs);
			});
	})
	//CREATE NEW SUB
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
	//GET SUB
	.get((req, res) => {
		Sub.where('id', req.params.id)
			.fetchAll({ withRelated: ['posts', 'postUsers', 'postComments', 'subscribers']})
			.then(sub => {
				res.status(200).json(sub);
			});
	})


module.exports = router;
