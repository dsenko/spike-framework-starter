'import $router as app.router';

app.controller.register("Home", {

    components: {
        PostsList: {
            recentPosts: true
        }
    },

    init: function (params) {
        console.log(params);
    }

});
