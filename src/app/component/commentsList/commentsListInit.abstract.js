'import $commentsList as app.partial.CommentsList';
'import $comments as app.service.Comments';
'import $super as app.component.CommentsList';

app.abstract.register("CommentsListInit", {

   showMessage: function(){
       app.log('ok');
   }

});