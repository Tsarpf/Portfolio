$(window).load(function() {
    var blogId = 0;
    //TODO: decide what page we are on here, and get the JSON according to that. 
    $.getJSON("/get/blog/0", function(data) {
        console.log('data!');
        console.log(data);
        var blog = new Blog(data);
        var contentView = new ContentView({model: blog});
    });
});
        

