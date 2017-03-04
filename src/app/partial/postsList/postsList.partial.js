'import $router as app.router';

app.partial.register("PostsList", {

    replace: true,

    selectPost: function (postId) {

        $router.redirect('post/:postId', {
            postId: postId
        });

    }

});