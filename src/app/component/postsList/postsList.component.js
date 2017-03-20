'import $postService as app.service.Post';
'import $router as app.router';
'import $postsList as app.partial.PostsList';

app.component.register("PostsList", {

    init: function (data) {

        if (data.recentPosts) {
            $this.createRecentPostsList();
        } else {
            $this.createAllPostsList();
        }

    },

    createRecentPostsList: function () {

        $postService.getRecentPosts()
            .then(function (posts) {

                $this.createPostsList(posts, 5);
            })
            .catch(function (error) {
            });

    },

    createAllPostsList: function () {

        $postService.getPosts()
            .then(function (posts) {
                $this.createPostsList(posts, 20);
            })
            .catch(function (error) {
            });

    },

    createPostsList: function (posts, limit) {

        $postsList.render(
            $this.selector.postsList(),
            {
                limit: limit,
                posts: posts
            }
        );

    }


});
