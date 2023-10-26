/* GET 'home' page */
module.exports.homelist =function(req,res){
    res.render('song-list',{title: 'Home'});
};

/* GET 'Location info' page */
module.exports.SongInfo1 =function(req,res){
    res.render('song-info1',{title: 'song-info1'});
};

/* GET 'Location info' page */
module.exports.SongInfo2 =function(req,res){
    res.render('song-info2',{title: 'song-info2'});
};

/* GET 'Location info' page */
module.exports.SongInfo3 =function(req,res){
    res.render('song-info3',{title: 'song-info3'});
};



/* GET 'Add review' page */
module.exports.addReview =function(req,res){
    res.render('song-review-form',{title: 'Add review'});
};