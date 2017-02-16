'import $router as app.router';

app.partial.register("PostsList", {

    selectPost: function (postId) {

        $router.redirect('post/:postId', {
            postId: postId
        });

    }

});