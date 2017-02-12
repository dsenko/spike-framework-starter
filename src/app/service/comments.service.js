app.service.register("Comments", {

    cachedComments: null,

    getComments: function (postId) {

        return app.rest.get(this.cachedComments || app.config.apiUrl + '/comments', {
            urlParams: {
                postId: postId
            }
        });

    }


});