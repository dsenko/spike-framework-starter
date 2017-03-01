/**
 * Application example configuration
 */
app.config.extend({

    apiUrl: 'https://jsonplaceholder.typicode.com',

    debug: true,

    lang: "en",

    rootPath: 'src/app',
    bootstrapModal: true,
    mainController: "Posts",

    transitions: true,

    routing: app.router.create()
        .path('/', {
            controller: 'Home'
        })
        .path('/about', {
            controller: 'About'
        })
        .path('/posts', {
            controller: 'Posts'
        })
        .path('/post/:postId', {
            controller: 'Post'
        })
        .path('/post/edit/:postId', {
            controller: 'EditPost',
            routingParams: {
                edit: true
            }
        })
        .path('/post/comments/:postId', {
            controller: 'Comments'
        })
        .other({
            controller: 'NotFound'
        })

});

/**SPIKE_IMPORT_END**/ 
/** 'import $commentsList as app.partial.CommentsList'; **/
/** 'import $comments as app.service.Comments'; **/app.abstract.register("CommentsList", {

    createCommentsList: function (postId) {
 var ___super = this; 

        app.service.Comments.getComments(postId)
            .then(function (comments) {

                app.partial.CommentsList.render(
                    ___super.selector.commentsList(),
                    {
                        comments: comments
                    }
                );

            })
            .catch(function (error) {
            });
    }

});/**SPIKE_IMPORT_END**/ 
/** 'import $commentsList as app.partial.CommentsList'; **/
/** 'import $comments as app.service.Comments'; **/app.abstract.register("CommentsListInit", {

    message: 'Comment message',

   showMessage: function(){
 var ___super = this; 

       var message = ___super.getMessage()

       app.log("showMessage "+message+"");
       app.log('showMessage'+ message+'');

   },

    getMessage: function(){
 var ___super = this; 
        return ___super.message;
    }

});/**SPIKE_IMPORT_END**/ 
/** 'import $router as app.router'; **/app.abstract.register("Modal", {

    bindCancel: function(){
 var ___super = this; 

        ___super.selector.close().click(function(e){
            e.preventDefault();
            ___super.hide();
        });

    },

    bindOk: function(params){
 var ___super = this; 

        if(params.approveCallback){

            ___super.selector.ok().click(function(e){
                e.preventDefault();
                ___super.hide();
                params.approveCallback();
            });


        }

    }

});/**SPIKE_IMPORT_END**/ 
/** 'import $commentsList as app.partial.CommentsList'; **/
/** 'import $comments as app.service.Comments'; **/app.component.register("CommentsList", {

    inherits: [
        app.abstract.CommentsListInit,
        app.abstract.CommentsList,
    ],

    init: function (data) {

        console.log(this);

        app.component.CommentsList.createCommentsList(data.pathParams.postId);
        app.component.CommentsList.showMessage();
    },



});/**SPIKE_IMPORT_END**/ 
app.component.register("Footer", {

    global: true,

    init: function (params) {


    },

});
/**SPIKE_IMPORT_END**/ 
/** 'import $postService as app.service.Post'; **/
/** 'import $router as app.router'; **/
/** 'import $postsList as app.partial.PostsList'; **/app.component.register("PostsList", {

    init: function (data) {

        if (data.recentPosts) {
            app.component.PostsList.createRecentPostsList();
        } else {
            app.component.PostsList.createAllPostsList();
        }

    },

    createRecentPostsList: function () {

        app.service.Post.getRecentPosts()
            .then(function (posts) {
                app.component.PostsList.createPostsList(posts, 5);
            })
            .catch(function (error) {
            });

    },

    createAllPostsList: function () {

        app.service.Post.getPosts()
            .then(function (posts) {
                app.component.PostsList.createPostsList(posts, 20);
            })
            .catch(function (error) {
            });

    },

    createPostsList: function (posts, limit) {

        app.partial.PostsList.render(
            app.component.PostsList.selector.postsList(),
            {
                limit: limit,
                posts: posts
            }
        );

    }


});/**SPIKE_IMPORT_END**/ 
/** 'import $this as app.component.Spinner'; **/app.component.register("Spinner", {

    global: true,

    init: function () {
    },

    show: function(){
        app.component.Spinner.selector.spinner().show();
    },

    hide: function(){
        app.component.Spinner.selector.spinner().hide();
    }

});/**SPIKE_IMPORT_END**/ 
/** 'import $router as app.router'; **/
/** 'import $system as app.system'; **/app.component.register("TopMenu", {

    global: true,

    init: function () {

        app.component.TopMenu.selector.toggleDropdown().click(function(){
            app.component.TopMenu.selector.dropdown().slideToggle(200);
        });

        app.component.TopMenu.selector.changeLangToEn().click(function(){
            app.system.changeLanguage('en');
            app.component.TopMenu.setLanguageText();
        });

        app.component.TopMenu.selector.changeLangToPl().click(function(){
            app.system.changeLanguage('pl');
            app.component.TopMenu.setLanguageText();
        });

        app.component.TopMenu.selectCurrent(app.router.getCurrentRoute());

        app.router.onRouteChange('topMenu', function(e, currentRoute, currentController){
            app.component.TopMenu.selectCurrent(currentRoute);
            app.component.TopMenu.selector.dropdown().slideUp(200);
        });

    },


    selectCurrent: function(currentRoute){

        if(currentRoute == ''){
            currentRoute = 'home';
        }

        app.component.TopMenu.selector.home().removeClass('active');
        app.component.TopMenu.selector.posts().removeClass('active');
        app.component.TopMenu.selector.about().removeClass('active');

        if(app.component.TopMenu.selector[currentRoute]){
            app.component.TopMenu.selector[currentRoute]().addClass('active');
        }

    },

    setLanguageText: function(){
        app.component.TopMenu.selector.currentLang().attr('spike-translation', 'language_'+app.config.lang);
    }

});/**SPIKE_IMPORT_END**/ 
app.controller.register("About", {

    init: function () {
    }

});/**SPIKE_IMPORT_END**/ 
/** 'import $this as app.controller.Comments'; **/
/** 'import $router as app.router'; **/app.controller.register("Comments", {

    components: ['CommentsList'],

    init: function () {
        app.controller.Comments.selector.backToPost().click(app.router.back);
    }


});/**SPIKE_IMPORT_END**/ 
/** 'import $router as app.router'; **/
/** 'import $system as app.system'; **/
/** 'import $postService as app.service.Post'; **/
/** 'import $confirmModal as app.modal.ConfirmDelete'; **/app.controller.register("EditPost", {

    post: null,

    init: function (data) {

        app.controller.EditPost.selector.backToPost().click(app.router.back);

        app.service.Post.getPost(data.pathParams.postId)
            .then(function(result){
                app.controller.EditPost.post = result;
                app.controller.EditPost.setPost();
            })
            .catch(function(error){
            });

    },

    setPost: function(){

        app.controller.EditPost.selector.names.title().set(app.controller.EditPost.post.title);
        app.controller.EditPost.selector.names.body().set(app.controller.EditPost.post.body);

        app.controller.EditPost.selector.save().click(function(e){
            e.preventDefault();

            var serializedPost = $.extend(true, app.controller.EditPost.post, app.controller.EditPost.selector.postForm().serializeObject());

            app.service.Post.savePost(serializedPost);
            app.router.back();

        });

        app.controller.EditPost.selector.delete().click(function(e){
            e.preventDefault();

            app.system.render(app.modal.ConfirmDelete, {
                approveCallback: function(){
                    app.service.Post.deletePost(app.controller.EditPost.post);
                    app.router.redirect('/posts');
                }
            });

        });

    },



});/**SPIKE_IMPORT_END**/ 
/** 'import $router as app.router'; **/app.controller.register("Home", {

    components: {
        PostsList: {
            recentPosts: true
        }
    },

    init: function (params) {
        console.log(params);
    }

});/**SPIKE_IMPORT_END**/ 
app.controller.register("NotFound", {

    init: function () {
    }

});/**SPIKE_IMPORT_END**/ 
/** 'import $router as app.router'; **/
/** 'import $postService as app.service.Post'; **/app.controller.register("Post", {

    post: null,

    init: function (data) {

        app.controller.Post.selector.backToList().click(app.router.back);

        app.service.Post.getPost(data.pathParams.postId)
            .then(function(result){
                app.controller.Post.post = result;
                app.controller.Post.setPost();
            })
            .catch(function(error){

            });

    },

    setPost: function(){

        app.controller.Post.selector.title().set(app.controller.Post.post.title);
        app.controller.Post.selector.author().set(app.controller.Post.post.author);
        app.controller.Post.selector.body().set(app.controller.Post.post.body);

        app.controller.Post.selector.comments().set(app.router.createLink('post/comments/'+app.controller.Post.post.id));
        app.controller.Post.selector.edit().set(app.router.createLink('post/edit/'+app.controller.Post.post.id));

    }

});/**SPIKE_IMPORT_END**/ 
app.controller.register("Posts", {

    components: ['PostsList'],

    init: function () {

    }

});/**SPIKE_IMPORT_END**/ 
/** 'import $this as app.modal.ConfirmDelete'; **/app.modal.register("ConfirmDelete", {

    inherits: [
        app.abstract.Modal
    ],

	init : function(params){

        app.modal.ConfirmDelete.bindCancel();
        app.modal.ConfirmDelete.bindOk(params);

	}


});/**SPIKE_IMPORT_END**/ 
/** 'import $rest as app.rest'; **/app.service.register("Comments", {

    cachedComments: null,

    getComments: function (postId) {

        return app.rest.get(this.cachedComments || app.config.apiUrl + '/comments', {
            urlParams: {
                postId: postId
            }
        });

    }


});/**SPIKE_IMPORT_END**/ 
/** 'import $rest as app.rest'; **/
/** 'import $listUtil as app.util.List'; **/app.service.register("Post", {

    cachedPosts: null,

    getPosts: function () {

        return app.rest.get(app.service.Post.cachedPosts || app.config.apiUrl + '/posts')
            .then(function (result) {
                app.service.Post.cachedPosts = result;
            });

    },

    getRecentPosts: function () {

        return app.rest.get(app.service.Post.cachedPosts || app.config.apiUrl + '/posts', {
            interceptors: ["Request"]
        })
            .then(function (result) {
                app.service.Post.cachedPosts = result;
            });

    },

    getPost: function (postId) {

        var cachedPost = app.util.List.findByProperty(app.service.Post.cachedPosts, 'id', postId);

        return app.rest.get(cachedPost || app.config.apiUrl + '/posts/:postId', {
            pathParams: {
                postId: postId
            }
        });

    },

    savePost: function(post){

        var postIndex = app.util.List.findIndexByProperty(app.service.Post.cachedPosts, 'id', post.id);

        if(postIndex && app.service.Post.cachedPosts[postIndex]){
            app.service.Post.cachedPosts[postIndex] = post;
        }

    },

    deletePost: function(post){

        var postIndex = app.util.List.findIndexByProperty(app.service.Post.cachedPosts, 'id', post.id);

        if(postIndex && app.service.Post.cachedPosts[postIndex]){
            app.service.Post.cachedPosts = app.util.List.removeFromList(app.service.Post.cachedPosts, postIndex);
        }

    }


});/**SPIKE_IMPORT_END**/ 
app.partial.register("CommentsList", {

});/**SPIKE_IMPORT_END**/ 
/** 'import $router as app.router'; **/app.partial.register("PostsList", {

    selectPost: function (postId) {

        app.router.redirect('post/:postId', {
            postId: postId
        });

    }

});/**SPIKE_IMPORT_END**/ 
app.util.register("List", {

    findByProperty: function(array, property, value){

        if(!array || !property){
            return null;
        }

        for(var i = 0; i < array.length; i++){

            if(array[i][property] === value){
                return array[i];
            }

        }

        return null;

    },

    findIndexByProperty: function(array, property, value){

        if(!array || !property){
            return null;
        }

        for(var i = 0; i < array.length; i++){

            if(array[i][property] === value){
                return i;
            }

        }

        return -1;

    },

    removeFromList: function(array, index){

        var newArr =[];

        for(var i = 0; i < array.length; i++){

            if(i !== index){
                newArr.push(array[i]);
            }

        }


        return newArr;

    }

});/**SPIKE_IMPORT_END**/ 
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

/**
 * Inits Spike application
 */
app.system.init();
