'import $router as app.router';

app.controller.register("Home", {

    components: {
        PostsList: {
            recentPosts: true
        }
    },

    init: function () {

        $this.selector.home().click(function () {
            $router.redirect($router.createLink('/someLink'))
        });

    }

});
