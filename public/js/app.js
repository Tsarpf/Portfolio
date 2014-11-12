$(window).load(function() {
    var blogId = 0;
    $.getJSON("/blog/0", function(data) {
        console.log('data!');
        console.log(data);
        console.log(Blog);
        var blog = new Blog(data);
        var contentView = new ContentView({model: blog});
    });
});
        

