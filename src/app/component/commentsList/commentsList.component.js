app.component.register("CommentsList", {

    init: function (data) {
        this.createCommentsList(data.pathParams.postId);
    },

    createCommentsList: function (postId) {

        var self = this;

        app.service.Comments.getComments(postId)
            .then(function (comments) {

                app.lister.CommentsList.render(
                    self.selector.commentsList(),
                    comments
                );

            })
            .catch(function (error) {
            });
    }

});
