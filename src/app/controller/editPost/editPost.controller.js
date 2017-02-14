'import $router as app.router';
'import $system as app.system';
'import $postService as app.service.Post';
'import $confirmModal as app.modal.ConfirmDelete';

app.controller.register("EditPost", {

    post: null,

    init: function (data) {

        $this.selector.backToPost().click(app.router.back);

        $postService.getPost(data.pathParams.postId)
            .then(function(result){
                $this.post = result;
                $this.setPost();
            })
            .catch(function(error){
            });

    },

    setPost: function(){

        $this.selector.names.title().set($this.post.title);
        $this.selector.names.body().set($this.post.body);

        $this.selector.save().click(function(e){
            e.preventDefault();

            var serializedPost = $.extend(true, $this.post, $this.selector.postForm().serializeObject());

            $postService.savePost(serializedPost);
            $router.back();

        });

        $this.selector.delete().click(function(e){
            e.preventDefault();

            $system.render($confirmModal, {
                approveCallback: function(){
                    $postService.deletePost($this.post);
                    $router.redirect('/posts');
                }
            });

        });

    },



});