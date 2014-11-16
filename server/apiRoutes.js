module.exports = function(app) {

    var getBlogById = function(id) {
        var obj = {
            id: id,
            name: "Default blog name",
            owner: "Default blog owner",
            entries: [
                getEntryById(id, 0),
                getEntryById(id, 1),
                getEntryById(id, 2),
                getEntryById(id, 4),
                getEntryById(id, 5),
                getEntryById(id, 6),

            ],
            backgroundPicture: "/media/defaultBackground.jpg"
        }

        return obj;
    }

    var getEntryById = function(blogId, entryId) {
        var obj = {
            blogId: blogId,
            id: entryId,
            comments: [getCommentById(blogId, entryId, 0)],
            body: "The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy but also of grief, before being allowed in the spacecraft cabin.\nWhat was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.\nWe want to explore. We’re curious people. Look back over history, people have put their lives at stake to go out and explore … We believe in what we’re doing. Now it’s time to go.",
            headline: "I'm a header"
        }
        return obj;
    }

    var getCommentById = function(blogId, entryId, commentId) {
        var obj = {
            id: commentId,
            entryId: entryId,
            blogId: blogId,
            body: "This is a comment",
            nickname: "Testuser",
            loggedIn: false
        }
        return obj;
    }

    app.get('/get/blog/:id', function(req, res) {
        var id = req.params.id;
        var obj = getBlogById(id);
        res.json(obj);
    });

    app.get('/get/blog/:blogid/entries/:entryid', function(req, res) {
        var blogId = req.params.blogid;
        var entryId = req.params.entryid;
        var obj = getEntryById(blogId, entryId);
        res.json(obj);
    });

    app.get('/get/blog/:blogid/entries/:entryid/comments/:commentid', function(req, res) {
        var blogId = req.params.blogid;
        var entryId = req.params.entryid;
        var commentId = req.params.commentid;
        var obj = getCommentById(blogId, entryId, commentId);
        res.json(obj);
    });

}
