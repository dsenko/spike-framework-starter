/**
 * Added example language translation
 */
app.message.add("en", "i18/en.json");
app.message.add("pl", "i18/pl.json");
/**
 * IMPORTANT Remove this line when go to production
 * For development time it is pretty good to avoid caching files
 */
app.system.disableCache();

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

/**
 * Inits Spike application
 */
app.system.init();
