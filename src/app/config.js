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

