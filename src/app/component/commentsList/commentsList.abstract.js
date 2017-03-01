'import $commentsList as app.partial.CommentsList';
'import $comments as app.service.Comments';

app.abstract.register("CommentsList", {

    createCommentsList: function (postId) {

        $comments.getComments(postId)
            .then(function (comments) {

                $commentsList.render(
                    $super.selector.commentsList(),
                    {
                        comments: comments
                    }
                );

            })
            .catch(function (error) {
            });
    }

});