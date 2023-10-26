var express = require('express');
var router = express.Router();
var ctrlSongs = require('../controller/songs');
var ctrlReviews = require('../controller/reviews');
router.get('/songs', ctrlSongs.songsListByDuration);
router.post('/songs', ctrlSongs.songsCreate);
router.get('/songs/:songsid', ctrlSongs.songsReadOne);
router.put('/songs/:songsid', ctrlSongs.songsUpdateOne);
router.delete('/songs/:songsid', ctrlSongs.songsDeleteOne);
// reviews
router.post('/songs/:songsid/reviews', ctrlReviews.reviewsCreate);
router.get('/songs/:songsid/reviews/:reviewid',ctrlReviews.reviewsReadOne);
router.put('/songs/:songsid/reviews/:reviewid',ctrlReviews.reviewsUpdateOne);
router.delete('/songs/:songsid/reviews/:reviewid',ctrlReviews.reviewsDeleteOne);
module.exports = router;