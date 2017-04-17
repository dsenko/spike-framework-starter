'import $router as app.router';

app.partial.register("PostsList", {

    replace: true,

    before: function(model){
        model.limit = 10;
    },

    selectPost: function (postId) {

        $router.redirectByName('Post', {
            postId: postId
        });

    }

});