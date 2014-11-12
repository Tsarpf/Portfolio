var EntryView = Backbone.View.extend({
    initialize: function() {
    },

    render: function() {
        var self = this;

        $.get('templates/content.html', function(data) {
            var template = _.template(data, {entry: self.model});
            self.$el.html(template);
        }, 'html');
    }
});
