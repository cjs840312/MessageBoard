import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import view from './view';


const server = express();

server.listen(3000, function () {
  console.log('listening on port 3000...');
});

server.get('/', (req, res) => {

  res.send(view({
    title: 'Message Board'
  }));
});

server.get('/bundle.js', (req, res) => {
  res.sendFile(__dirname+"/bundle.js");
});