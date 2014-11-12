
var Blog = Backbone.Model.extend({
    defaults: {
        entries: []
    },

    initialize: function() {
        var self = this;
        this.entries= new EntryCollection(this.get('entries'));
        this.entries.url = function() {
            return self.url() + '/entries';
        };
    },
});

var EntryCollection = Backbone.Collection.extend({
    model: Entry,
    url: function() { return '/entries'; }
});

var Entry = Backbone.Model.extend({
    defaults: {
        body: "",
        comments: []
    }
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
