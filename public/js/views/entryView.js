var EntryView = Backbone.View.extend({
    initialize: function() {
    },

    render: function() {
        var self = this;

        $.get('templates/entry.html', function(data) {
            var template = _.template(data);
            self.$el.html(template({entry: self.model}));
            console.log(self.el);
        }, 'html');
    }
});
