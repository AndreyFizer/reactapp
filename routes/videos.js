var express = require('express');
var router = express.Router();
var videosFakeArray = [
    {
        _id        : 1,
        title      : 'dog 1',
        imgUrl     : 'http://www.patrawsonsurfboards.com/wp-content/uploads/2011/12/surfboard-temp2.jpg',
        videoUrl   : 'd0unJs46GLs',
        description: 'Some tufta about apple'
    },
    {
        _id        : 2,
        title      : 'dog cat 2',
        imgUrl     : 'http://pop.h-cdn.co/assets/cm/15/06/54d12b6fac9d3_-_surfboard-diy-01-0811-xln.jpg',
        videoUrl   : 'PWgZnSCazyY',
        description: 'This is description...'
    },
    {
        _id        : 3,
        title      : 'dog cat mouse 3',
        imgUrl     : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLB6ODM64RnTlYZ6zDRCFsvIc5-RuAQqsnbaBx1wkdRudfH41ycA',
        videoUrl   : 'SJNrnaoB4P8',
        description: 'Nothing to say about this...'
    }

];
// var Handler = require('../handlers/user.js');

module.exports = function () {
    // var handler = new Handler();
    
    router.get('/', function (req, res, next) {
        var query = req.query;
        var term = query.term || "";
        
        var result = [];
        
        videosFakeArray.forEach(function (video) {
            var termIndex = video.title.indexOf(term);
            
            if (termIndex !== -1){
                result.push(video);
            }
        });
        
        res.send(result);
    });
    
    router.get('/:id', function (req, res, next) {
        var id = req.params.id;
        var result = videosFakeArray[id - 1] || {};
        res.send(result);
    });
    
    return router;
};