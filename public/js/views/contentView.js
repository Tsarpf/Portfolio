var ContentView = Backbone.View.extend({
    el: '#content',
    initialize: function() {
        this.entries = new EntryCollection(this.get('entries'));
        //this.render();
    },

    render: function() {
        var self = this;
        this.$el.empty();
        this.entries.each(function(entry) {
            self.$el.append(new Entry({model: entry, entry.comments???}).render().el);
        });
    }
});
