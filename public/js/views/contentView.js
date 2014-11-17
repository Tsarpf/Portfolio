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

            var obj = {
                title: this.model.get('title'),
                owner: this.model.get('owner'),
                blogId: this.model.get('id')
            }

            var headerView = new HeaderView(obj);
            headerView.render();
        }

        this.model.entries.each(function(entry) {
            var entryView = new EntryView({model: entry});
            entryView.render();

            self.$el.append(entryView.el);
        });
    }
});
