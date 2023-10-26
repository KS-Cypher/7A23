const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    songwriter: String,
    singer: String,
    hero: String,
    heroine: String,
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    source: String,       // New field: Source of the song
    movieName: String,    // New field: Name of the movie
    producer: String,     // New field: Name of the producer
    writer: String,       // New field: Name of the writer
    reviews: [reviewSchema]
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;

