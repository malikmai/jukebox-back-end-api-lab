const express = require("express");
const router = express.Router();
const Track = require("../models/Track.js");

// POST - Create a new track
app.post('/tracks', async (req, res) => {
    try {
      const newTrack = new Track(req.body);
      await newTrack.save();
      res.status(201).send(newTrack);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // GET - Retrieve all tracks
  app.get('/tracks', async (req, res) => {
    try {
      const tracks = await Track.find({});
      res.status(200).send(tracks);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // GET - Retrieve a specific track by ID
  app.get('/tracks/:id', async (req, res) => {
    try {
      const track = await Track.findById(req.params.id);
      if (track) {
        res.status(200).send(track);
      } else {
        res.status(404).send('Track not found');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // PUT - Update a track
  app.put('/tracks/:id', async (req, res) => {
    try {
      const updatedTrack = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).send(updatedTrack);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  // DELETE - Delete a track
  app.delete('/tracks/:id', async (req, res) => {
    try {
      const deletedTrack = await Track.findByIdAndDelete(req.params.id);
      if (deletedTrack) {
        res.status(200).send(deletedTrack);
      } else {
        res.status(404).send('Track not found');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });