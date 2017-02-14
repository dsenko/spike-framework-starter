'import $postService as app.service.Post';
'import $router as app.router';
'import $postListLister as app.lister.PostsList';

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

        $postListLister.render(
            $this.selector.postsList(),
            posts,
            {
                select: $this.selectPost
            },
            {
                limit: limit
            }
        );

    },

    selectPost: function (e) {

        $router.redirect('post/:postId', {
            postId: e.eCtx.id
        });

    }

});
