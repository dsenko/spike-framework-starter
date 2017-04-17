/**
 * Application example configuration
 */
app.config.extend({

    enableSecurity: false,
    securityWatchConsole: false,
    securityCheckConsoleInterval: 5000,

    apiUrl: 'https://jsonplaceholder.typicode.com',

    debug: true,

    lang: "en",

    rootPath: 'src/app',
    bootstrapModal: true,
    mainController: "Home",

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
            name: 'Post',
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

