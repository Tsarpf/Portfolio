var ContentView = Backbone.View.extend({
    el: '#content',
    initialize: function() {
        //this.entries = new EntryCollection(this.get('entries'));
        this.render();
    },

    render: function() {
        var self = this;
        this.$el.empty();
        this.model.entries.each(function(entry) {
            if(self.drawComments) {
               entry.comments.fetch(); 
            }
            var entryView = new EntryView({model: entry});
            entryView.render();

            console.log(entryView.el);

            self.$el.append(entryView.el);
        });
    }
});
