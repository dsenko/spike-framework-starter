'import $commentsList as app.partial.CommentsList';
'import $comments as app.service.Comments';

app.abstract.register("CommentsList", {

    createCommentsList: function (postId) {

        var self = this;

        $comments.getComments(postId)
            .then(function (comments) {

                $commentsList.render(
                    self.selector.commentsList(),
                    {
                        comments: comments
                    }
                );

            })
            .catch(function (error) {
            });
    }

});