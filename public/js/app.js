
var Blog = Backbone.Model.extend({
    defaults: {
        entries: [],
        backgroundPicture: "defaultBackground.jpg"
    },

    initialize: function() {
        var self = this;
        this.entries = new EntryCollection(this.get('entries'));
        this.entries.url = function() {
            return self.url() + '/entries';
        };
    },

    urlRoot: '/blog'
});

var EntryCollection = Backbone.Collection.extend({
    model: Entry,
    url: function() { return '/entries'; }
});

var Entry = Backbone.Model.extend({
    defaults: {
        comments: [],
        body: "",
        headline: ""
    },

    initialize: function() {
        var self = this;
        var comments = this.get('comments');
        if(comments) {
            this.comments = new CommentCollection(comments);
        }
        else {
            this.comments = new CommentCollection([]); //TODO: check if passing undefined is fine too
        }
        this.comments.url = function() {
            return self.url() + '/comments';
        };
    },

});

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
