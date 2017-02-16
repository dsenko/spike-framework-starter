'import $rest as app.rest';
'import $listUtil as app.util.List';

app.service.register("Post", {

    cachedPosts: null,

    getPosts: function () {

        return $rest.get($this.cachedPosts || app.config.apiUrl + '/posts')
            .then(function (result) {
                $this.cachedPosts = result;
            });

    },

    getRecentPosts: function () {

        return $rest.get($this.cachedPosts || app.config.apiUrl + '/posts', {
            interceptors: ["Request"]
        })
            .then(function (result) {
                $this.cachedPosts = result;
            });

    },

    getPost: function (postId) {

        var cachedPost = $listUtil.findByProperty($this.cachedPosts, 'id', postId);

        return $rest.get(cachedPost || app.config.apiUrl + '/posts/:postId', {
            pathParams: {
                postId: postId
            }
        });

    },

    savePost: function(post){

        var postIndex = $listUtil.findIndexByProperty($this.cachedPosts, 'id', post.id);

        if(postIndex && $this.cachedPosts[postIndex]){
            $this.cachedPosts[postIndex] = post;
        }

    },

    deletePost: function(post){

        var postIndex = $listUtil.findIndexByProperty($this.cachedPosts, 'id', post.id);

        if(postIndex && $this.cachedPosts[postIndex]){
            $this.cachedPosts = $listUtil.removeFromList($this.cachedPosts, postIndex);
        }

    }


});