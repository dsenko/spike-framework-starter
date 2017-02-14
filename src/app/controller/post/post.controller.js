'import $router as app.router';
'import $postService as app.service.Post';

app.controller.register("Post", {

    post: null,

    init: function (data) {

        $this.selector.backToList().click($router.back);

        $postService.getPost(data.pathParams.postId)
            .then(function(result){
                $this.post = result;
                $this.setPost();
            })
            .catch(function(error){

            });

    },

    setPost: function(){

        $this.selector.title().set($this.post.title);
        $this.selector.author().set($this.post.author);
        $this.selector.body().set($this.post.body);

        $this.selector.comments().set($router.createLink('post/comments/'+$this.post.id));
        $this.selector.edit().set($router.createLink('post/edit/'+$this.post.id));

    }

});