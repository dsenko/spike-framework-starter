'import $commentsList as app.partial.CommentsList';
'import $comments as app.service.Comments';

app.component.register("CommentsList", {

    inherits: [
        app.abstract.CommentsList,
    ],

    init: function (data) {
        $this.createCommentsList(data.pathParams.postId);

        app.log('component rootSelector');
        console.log($this.rootSelector());

    },



});
