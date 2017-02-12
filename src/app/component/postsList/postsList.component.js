app.component.register("PostsList", {

    init: function (data) {

        if (data.recentPosts) {
            this.createRecentPostsList();
        } else {
            this.createAllPostsList();
        }

    },

    createRecentPostsList: function () {

        app.service.Post.getRecentPosts()
            .then(function (posts) {
                app.component.PostsList.createPostsList(posts, 5);
            })
            .catch(function (error) {
            });

    },

    createAllPostsList: function () {

        app.service.Post.getPosts()
            .then(function (posts) {
                app.component.PostsList.createPostsList(posts, 20);
            })
            .catch(function (error) {
            });

    },

    createPostsList: function (posts, limit) {

        app.lister.PostsList.render(
            app.component.PostsList.selector.postsList(),
            posts,
            {
                select: app.component.PostsList.selectPost
            },
            {
                limit: limit
            }
        );

    },

    selectPost: function (e) {

        app.router.redirect('post/:postId', {
            postId: e.eCtx.id
        });

    }

});
