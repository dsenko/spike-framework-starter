'import $router as app.router';
'import $postService as app.service.Post';
'import $events as app.events';

app.controller.register("Post", {

    post: null,

    init: function (data) {

        $this.selector.backToList().click($router.back);

        $postService.getPost(data.pathParams.postId)
            .then(function(result){
                $this.post = result;
                $this.setPost();

                $events.broadcast('EnterToPostEvent', {
                    post: result
                });

            })
            .catch(function(error){

            });

    },

    setPost: function(){

        $this.post.post = {
            title: $this.post.title,
            author: $this.post.author,
            body: $this.post.body
        };

        $this.selector.postContent().set($this.post);

        $this.selector.comments().set($router.createLink('post/comments/'+$this.post.id));
        $this.selector.edit().set($router.createLink('post/edit/'+$this.post.id));

    }

});