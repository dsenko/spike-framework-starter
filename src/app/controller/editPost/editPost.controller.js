app.controller.register("EditPost", {

    post: null,

    init: function (data) {

        app.ctx.selector.backToPost().click(app.router.back);

        app.service.Post.getPost(data.pathParams.postId)
            .then(function(result){
                app.ctx.post = result;
                app.ctx.setPost();
            })
            .catch(function(error){
            });

    },

    setPost: function(){

        app.ctx.selector.names.title().set(app.ctx.post.title);
        app.ctx.selector.names.body().set(app.ctx.post.body);

        app.ctx.selector.save().click(function(e){
            e.preventDefault();

            var serializedPost = $.extend(true, app.ctx.post, app.ctx.selector.postForm().serializeObject());

            app.service.Post.savePost(serializedPost);
            app.router.back();

        });

        app.ctx.selector.delete().click(function(e){
            e.preventDefault();

            app.system.render(app.modal.ConfirmDelete, {
                approveCallback: function(){
                    app.service.Post.deletePost(app.ctx.post);
                    app.router.redirect('/posts');
                }
            });

        });

    },



});