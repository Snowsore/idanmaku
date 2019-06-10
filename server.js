#!/usr/bin/env node

// Iframe danmaku server

const express = require('express');
const app = express();

const pug = require('pug');
app.set('view engine', 'pug');

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/cannon/*', (req,res) => {
	res.render('cannon');
});

app.get('/canvas/*', (req, res) => {
	res.render('canvas');
});

app.get('/js/*', (req, res) => {
	res.sendFile(__dirname + req.path);
});

app.get('*', (req, res) => {
	res.render('index');
});

io.on('connection', (socket) => {
	socket.on('joinRoom', (room) => {
		socket.room = room;
		socket.join(room);
	});

	socket.on('fire', (msg) => {
		io.in(socket.room).emit('fired', msg);
	});
});

http.listen(8096);
