'import $router as app.router';

app.controller.register("Home", {

    components: {
        PostsList: {
            recentPosts: true
        }
    },

    init: function () {

        var id = 2;

        $this.selector.home().click(function () {
            $router.redirect($router.createLink("/post/${id}"))
        });
    }

});
