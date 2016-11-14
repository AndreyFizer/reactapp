module.exports = function (app) {
    'use strict';
    
    var userRouter = require('./users')();
    var videoRouter = require('./videos')();
    
    app.use('/users', userRouter);
    app.use('/videos', videoRouter);
    
    function errHandler(err, req, res, next) {
        var status = err.status || 500;
        var msg;
        
        if (err.status != 200) {
            msg = err.message;
        }
        
        res.status(status).send({error: msg});
    }
    
    app.use(errHandler);
};
