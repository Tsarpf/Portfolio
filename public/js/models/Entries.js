var Entry = Backbone.Model.extend({
    defaults: {
        comments: [],
        body: "",
        headline: ""
    },

    initialize: function() {
        var self = this;

        console.log('comments');
        console.log(this.get('comments'));
        this.comments = new CommentCollection(this.get('comments'));

        this.comments.url = function() {
            return self.url() + '/comments';
        };
    },

});

var EntryCollection = Backbone.Collection.extend({
    model: Entry,
    url: function() { return '/entries'; }
});

