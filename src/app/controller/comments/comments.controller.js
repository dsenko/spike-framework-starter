'import $this as app.controller.Comments';
'import $router as app.router';

app.controller.register("Comments", {

    components: ['CommentsList'],

    init: function () {
        $this.selector.backToPost().click($router.back);
    }


});