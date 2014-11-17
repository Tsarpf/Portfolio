var Blog = Backbone.Model.extend({
    defaults: {
        title: "title",
        owner: "owner",
        entries: [],
        backgroundPicture: "defaultBackground.jpg"
    },

    initialize: function() {
        var self = this;
        console.log('entries');
        console.log(this.get('entries')); 
        this.entries = new EntryCollection(this.get('entries'));
        this.entries.url = function() {
            return self.url() + '/entries';
        };
    },

    urlRoot: '/blog'
});

