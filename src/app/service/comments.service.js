'import $rest as app.rest';

app.service.register("Comments", {

    cachedComments: null,

    getComments: function (postId) {

        return $rest.get(this.cachedComments || app.config.apiUrl + '/comments', {
            urlParams: {
                postId: postId
            }
        });

    }


});