import { Music } from './classes/music.mjs'
import express from 'express';
import fs from 'fs'
import Showdown from 'showdown';

const app = express()
const PORT = 80

app.get('/', (req, res) => {
    const Fs = fs
    var data;
    try {
      data = Fs.readFileSync('./README.md', 'utf8')
    } catch (err) {
      console.error(err)
    }
  
    // convert markdown to html
    var showdown  = Showdown,
      converter = new showdown.Converter(),
      html      = converter.makeHtml(data);
  
    res.send(html)
});

app.get('/create', (req, res) => {
    var music = new Music(req.query)
    music.create()
    res.send(music)
});

app.get('/read', (req, res) => {
    // NOT WORKING
    var music = new Music(req.query)
    music.read()
    res.send(music)
});

app.get('/update', (req, res) => {

    var music = new Music(req.query)
    music.update()
    res.send(music)
});

app.get('/delete', (req, res) => {
    var music = new Music(req.query)
    music.delete()
    let ret = {
        name: music.name,
        status: 'deleted'
    }
    res.send(ret)
});

app.listen(PORT)  