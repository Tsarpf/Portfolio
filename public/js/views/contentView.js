var ContentView = Backbone.View.extend({
    el: '#content',
    initialize: function() {
        //this.entries = new EntryCollection(this.get('entries'));
        this.render();
    },

    render: function() {
        var self = this;
        this.$el.empty();

        if(this.model.get('title')) {
            var headerView = new HeaderView({title: this.model.get('title'), owner: this.model.get('owner')});
            headerView.render();
        }

        this.model.entries.each(function(entry) {
            var entryView = new EntryView({model: entry});
            entryView.render();

            self.$el.append(entryView.el);
        });
    }
});
