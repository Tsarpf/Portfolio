module.exports = function(app) {

    var serveIndex = function(res, cb) {
        var obj = {
            root: './public'
            /*TODO: add cache headers
             * And render pages on the server instead of ajaxing them*/
        };
        res.sendFile('/index.html', obj, cb);

    }

    app.get('/blog/:id', function(req, res) {
         serveIndex(res, function(err) {
            if(err) {
                console.log(err);
            }
        });
    });

    app.get('/blog/:blogid/entries/:entryid', function(req, res) {
         serveIndex(res, function(err) {
            if(err) {
                console.log(err);
            }
        });
    });

    app.get('/blog/:blogid/entries/:entryid/comments/:commentid', function(req, res) {
         serveIndex(res, function(err) {
            if(err) {
                console.log(err);
            }
        });
    });
}
