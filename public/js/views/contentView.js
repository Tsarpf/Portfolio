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
            if(this.drawComments) {
               entry.comments.fetch(); 
            }
            console.log('entry');
            console.log(entry);
            self.$el.append(new EntryView({model: entry}).render().el);
        });
    }
});
