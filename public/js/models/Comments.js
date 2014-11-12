var CommentCollection = Backbone.Collection.extend({
    model: Comment,
    url: function() { return '/comments';}
});

var Comment = Backbone.Model.extend({
    defaults: {
        body: "",
        nickname: "",
        loggedIn: false
    }
});
