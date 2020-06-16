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
			})
	})

router
	.route('/:id')
	.get((req, res) => {
		Sub.where('id', req.params.id)
			.fetchAll({ withRelated: ['posts']})
			.then(sub => {
				res.status(200).json(sub);
			})
	})
	
module.exports = router;
