var ContentView = Backbone.View.extend({
    el: '#content',
    initialize: function() {
        this.entries = new EntryCollection(this.get('entries'));
    },

    render: function() {
        var self = this;
        this.$el.empty();
        this.entries.each(function(entry) {
            if(this.drawComments) {
               entry.comments.fetch(); 
            }
            self.$el.append(new Entry({model: entry}).render().el);
        });
    }
});
