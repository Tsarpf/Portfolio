var HeaderView = Backbone.View.extend({
    el: "#header",
    initialize: function(header) {
        this.header = header;
        this.render();
    },

    render: function() {
        var self = this;

        $.get('/templates/header.html', function(data) {
            var template = _.template(data);
            self.$el.html(template({header: self.header}));
        }, 'html');
    }
});
