app.service.register("Post", {

    cachedPosts: null,

    getPosts: function () {

        return app.rest.get(this.cachedPosts || app.config.apiUrl + '/posts')
            .then(function (result) {
                app.service.Post.cachedPosts = result;
            });

    },

    getRecentPosts: function () {

        return app.rest.get(this.cachedPosts || app.config.apiUrl + '/posts')
            .then(function (result) {
                app.service.Post.cachedPosts = result;
            });

    },

    getPost: function (postId) {

        var cachedPost = app.util.List.findByProperty(this.cachedPosts, 'id', postId);

        return app.rest.get(cachedPost || app.config.apiUrl + '/posts/:postId', {
            pathParams: {
                postId: postId
            }
        });

    },

    savePost: function(post){

        var postIndex = app.util.List.findIndexByProperty(this.cachedPosts, 'id', post.id);

        if(postIndex && this.cachedPosts[postIndex]){
            this.cachedPosts[postIndex] = post;
        }

    },

    deletePost: function(post){

        var postIndex = app.util.List.findIndexByProperty(this.cachedPosts, 'id', post.id);

        if(postIndex && this.cachedPosts[postIndex]){
            this.cachedPosts = app.util.List.removeFromList(this.cachedPosts, postIndex);
        }

    }


});