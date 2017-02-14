'import $commentsLister as app.lister.CommentsList';
'import $comments as app.service.Comments';

app.component.register("CommentsList", {

    init: function (data) {
        $this.createCommentsList(data.pathParams.postId);
    },

    createCommentsList: function (postId) {

        $comments.getComments(postId)
            .then(function (comments) {

                $commentsLister.render(
                    $this.selector.commentsList(),
                    comments
                );

            })
            .catch(function (error) {
            });
    }

});
