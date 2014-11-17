$(window).load(function() {
    var blogId = 0;

    var path = location.pathname;
    
    $.getJSON("/get" + path, function(data) {
        console.log('data!');
        console.log(data);
        var blog = new Blog(data);
        var contentView = new ContentView({model: blog});
    });
});
        

