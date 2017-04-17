/**
 * Added example language translation
 */
app.message.add("en", "i18/en.json").then(function(){
    app.log('Language EN loaded');
});

app.message.add("pl", "i18/pl.json").then(function(){
    app.log('Language PL loaded');
});

/**
 * IMPORTANT Remove this line when go to production
 * For development time it is pretty good to avoid caching files
 */
app.system.disableCache();

app.rest.interceptor("Request", function(response, promise){

    app.log('invoke Request interceptor');

});

app.rest.spinnerHide = function(requestUri){
    app.component.Spinner.hide();
}

app.rest.spinnerShow = function(requestUri){
    app.component.Spinner.show();
}

app.events.extend({

    render: function(){

        app.system.getView().css('min-height', $(window).height()+'px');

        app.service.Post.getPosts();

    }

})

app.events.register('EnterToPostEvent');

/**
 * Inits Spike application
 */
app.system.init();
