module.exports = function(app) {

    var getPlaceholderBlogById = function(id) {
        var obj = {
            id: id,
            entries: [getEntryById(id, 0)],
            backgroundPicture = "/media/defaultBackground.jpg";
        }

        return obj;
    }

    var getEntryById = function(blogId, entryId) {
        var obj = {
            blogId: blogId,
            id: entryId,
            comments: [getCommentById(blogId, entryId, 0)],
            body: "This is a placeholder test entry body text",
            headline: "I'm a header"
        }
        return obj;
    }

    var getCommentById = function(blogId, entryId, commentId) {
        var obj = {
            body: "This is a comment",
            nickname: "Testuser",
            loggedIn: false
        }
        return obj;
    }

    app.get('/blog/:id', function(req, res) {
        var id = req.params.id;
        var obj = getPlaceholderBlogById(id);
        res.json(obj);
    });

    app.get('/blog/:blogid/entries/:entryid', function(req, res) {
        var blogId = req.params.blogid;
        var entryId = req.params.entryid;
        var obj = getEntryById(blogId, entryId);
        res.json(obj);
    });

    app.get('/blog/:blogid/entries/:entryid/comments/:commentid', function(req, res) {
        var blogId = req.params.blogid;
        var entryId = req.params.entryid;
        var commentId = req.params.commentid;
        var obj = getCommentById(blogId, entryId, commentId);
        res.json(obj);
    });
}
