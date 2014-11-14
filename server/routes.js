module.exports = function(app) {

    var getBlogById = function(id) {
        var obj = {
            id: id,
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
            body: "The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy but also of grief, before being allowed in the spacecraft cabin.\nWhat was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.\nWe want to explore. We’re curious people. Look back over history, people have put their lives at stake to go out and explore … We believe in what we’re doing. Now it’s time to go.\nMany say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.\nNever in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.\nWe have an infinite amount to learn both from nature and from each other\nThere can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.\nSpace, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.\nSpace, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.\n\nProblems look mighty small from 150 miles up.",
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

    app.get('/blog/:id', function(req, res) {
        var id = req.params.id;
        var obj = getBlogById(id);
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
