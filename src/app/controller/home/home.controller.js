'import $router as app.router';
'import $events as app.events';

app.controller.register("Home", {

    components: {
        PostsList: {
            recentPosts: true
        }
    },

    init: function (params) {
        app.debug('params',params);

        $events.listen('EnterToPostEvent', function(eventData){
           app.log('User enters to Post controller with data');
        });

    }

});
