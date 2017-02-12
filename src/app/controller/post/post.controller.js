app.controller.register("Post", {

    post: null,

    init: function (data) {

        app.ctx.selector.backToList().click(app.router.back);

        app.service.Post.getPost(data.pathParams.postId)
            .then(function(result){
                app.ctx.post = result;
                app.ctx.setPost();
            })
            .catch(function(error){

            });

    },

    setPost: function(){

        app.ctx.selector.title().set(app.ctx.post.title);
        app.ctx.selector.author().set(app.ctx.post.author);
        app.ctx.selector.body().set(app.ctx.post.body);

        app.ctx.selector.comments().set(app.router.createLink('post/comments/'+app.ctx.post.id));
        app.ctx.selector.edit().set(app.router.createLink('post/edit/'+app.ctx.post.id));

    }

});