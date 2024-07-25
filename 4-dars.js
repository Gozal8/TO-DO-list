// // const url = require("node:url")
// import URL from "node:url"

// // console.console.log(url)

// // const myUrl= new URL("https//example-server.uz/api/v1/users?name=Tom#age=16");

// // console.log(myUrl)

// // const {URL} = require("node:url")
// const myUrl = new URL("http://example-server.uz/api/v1/users?name=Tom#age=25")
// console.log(myUrl)


import express from "express";
import fs from 'fs';
import path from 'path';
import formidable from 'formidable';
// const express = require('express');
// const fs = require('fs');
// const path = require('path')
// const formidable = require('formidable');

const app = express();

app.post('/api/upload', (req, res, next) => {

	const form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {

		let oldPath = files.profilePic.filepath;
		let newPath = path.join(__dirname, 'uploads')
			+ '/' + files.profilePic.name
		let rawData = fs.readFileSync(oldPath)

		fs.writeFile(newPath, rawData, function (err) {
			if (err) console.log(err)
			return res.send("Successfully uploaded")
		})
	})
});

app.listen(3000, function (err) {
	if (err) console.log(err)
	console.log('Server listening on Port 3000');
});







