const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Comment = require("../model/comment");
const Post = require('../model/post');
const Subscription = require('../model/subscription');

router
	.route('/')
	//GET ALL USERS
	.get((req, res) => {
		User
			.fetchAll()
			.then(user => {
				res.status(200).json(user);
			});
	})
	//CREATE NEW USER
	.post((req, res) => {
		new User({
			fName: req.body.fName,
			lName: req.body.lName,
			linkedInId: req.body.linkedInId,
			description: req.body.description,
		})
			.save()
			.then(newUser => {
				res.status(201).json(newUser);
			});
	});

router
	.route('/:id')
	//GET USER
	.get((req, res) => {
		User.where('id', req.params.id)
			.fetchAll({ withRelated: ['posts', 'comments', 'subscriptions']})
			.then(user => {
				res.status(200).json(user);
			});
	});

module.exports = router;
