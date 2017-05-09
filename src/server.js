import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import view from './view';
import bodyParser from 'body-parser';


const server = express();

server.use(bodyParser.json());

const MESSAGES = {"Message":[]}

server.listen(3000, function () {
  console.log('listening on port 3000...');
});

server.get('/', (req, res) => {

  res.send(view());
});

server.get('/bundle.js', (req, res) => {
  res.sendFile(__dirname+"/bundle.js");
});

server.get('/message', (req, res) => {
  res.send(MESSAGES);
});

server.post('/message', (req, res) => {
   MESSAGES.Message=MESSAGES.Message.concat([{ "time":req.body.time, "content": req.body.content}])
   console.log(MESSAGES)
});