'import $commentsList as app.partial.CommentsList';
'import $comments as app.service.Comments';

app.component.register("CommentsList", {

    init: function (data) {
        $this.createCommentsList(data.pathParams.postId);
    },

    createCommentsList: function (postId) {

        $comments.getComments(postId)
            .then(function (comments) {

                $commentsList.render(
                    $this.selector.commentsList(),
                    {
                        comments: comments
                    }
                );

            })
            .catch(function (error) {
            });
    }

});
