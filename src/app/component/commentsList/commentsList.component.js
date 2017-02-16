'import $commentsList as app.partial.CommentsList';
'import $comments as app.service.Comments';

app.component.register("CommentsList", {

    inherits: [
        app.abstract.CommentsListInit,
        app.abstract.CommentsList,
    ],

    init: function (data) {

        console.log(this);

        $this.createCommentsList(data.pathParams.postId);
        $this.showMessage();
    },



});
