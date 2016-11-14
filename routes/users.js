var express = require('express');
var router = express.Router();
var usersFakeArray = [
    {
        _id      : 1,
        firstName: 'Ivan',
        lastName : 'Ivanov'
    },
    {
        _id      : 2,
        firstName: 'Petro',
        lastName : 'Johnson'
    },
    {
        _id      : 3,
        firstName: 'Pavlo',
        lastName : 'Zibrov'
    }

];
// var Handler = require('../handlers/user.js');

module.exports = function () {
    // var handler = new Handler();
    
    router.get('/', function (req, res, next) {
        res.send(usersFakeArray);
    });
    
    router.get('/:id', function (req, res, next) {
        var id = req.params.id;
        var result = usersFakeArray[id - 1] || {};
        res.send(result);
    });
    
    return router;
};