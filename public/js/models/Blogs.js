var Blog = Backbone.Model.extend({
    defaults: {
        entries: [],
        backgroundPicture: "defaultBackground.jpg"
    },

    initialize: function() {
        var self = this;
        console.log('this.entries');
        console.log(this.entries);
        this.entries = new EntryCollection(this.get('entries'));
        console.log('this.entries');
        console.log(this.entries);
        this.entries.url = function() {
            return self.url() + '/entries';
        };
    },

    urlRoot: '/blog'
});

