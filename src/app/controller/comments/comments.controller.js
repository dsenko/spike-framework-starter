app.controller.register("Comments", {

    components: ['CommentsList'],

    init: function () {
        app.ctx.selector.backToPost().click(app.router.back);
    }


});