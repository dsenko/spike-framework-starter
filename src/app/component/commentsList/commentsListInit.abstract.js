'import $commentsList as app.partial.CommentsList';
'import $comments as app.service.Comments';
'import $super as app.component.CommentsList';

app.abstract.register("CommentsListInit", {

    message: 'Comment message',

   showMessage: function(){


       var message = $super.getMessage()

       app.log('showMessage ${{message}}');

   },

    getMessage: function(){
        return $super.message;
    }

});