const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  soundCloudLink: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  songName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
