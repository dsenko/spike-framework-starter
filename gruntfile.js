var application = {

    outputApplication: './dist/js/app.js',
    outputTemplates: './dist/js/templates.js',
    outputCss: './dist/css/style.css',
    outputSass: './dist/css/style.scss',

    uglifyApplicationDist: './dist/js/app.min.js',
    uglifyTemplatesDist: './dist/js/templates.min.js',
    outputCssDist: './dist/css/style.css',
    outputCssDistMinified: './dist/css/style.min.css',

    uglifyTemplates: {},
    uglifyApplication: {},
    sassStyles: {},
    cssStyles: {},

    structure: [
        './src/app/config.js',

        './src/app/component/**/*.abstract.js',
        './src/app/controller/**/*.abstract.js',
        './src/app/modal/**/*.abstract.js',
        './src/app/service/**/*.abstract.js',
        './src/app/service/*.abstract.js',
        './src/app/partial/**/*.abstract.js',
        './src/app/partial/*.abstract.js',
        './src/app/util/**/*.abstract.js',
        './src/app/util/*.abstract.js',
        './src/app/abstract/**/*.abstract.js',
        './src/app/abstract/*.abstract.js',

        './src/app/component/**/*.component.js',
        './src/app/controller/**/*.controller.js',
        './src/app/modal/**/*.modal.js',
        './src/app/service/**/*.service.js',
        './src/app/service/*.service.js',
        './src/app/partial/**/*.partial.js',
        './src/app/partial/*.partial.js',
        './src/app/util/**/*.util.js',
        './src/app/util/*.util.js',

        './src/app/main.js',
    ],

    html: ['./src/app/**/*.html', './src/app/**/*.htm'],
    sass: ['./src/sass/*.scss', './src/sass/*.css', './src/app/**/*.scss', './src/app/**/*.css'],

};

application.uglifyApplication[application.uglifyApplicationDist] = application.outputApplication;
application.uglifyTemplates[application.uglifyTemplatesDist] = application.outputTemplates;
application.sassStyles[application.outputCssDist] = application.outputSass;
application.cssStyles[application.outputCssDistMinified] = application.outputCss;

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-shell-spawn');

    grunt.initConfig({

        clean: {
            postBuild: [
                './dist/css/style.css',
                './dist/css/style.css.map',
                './dist/css/style.scss',
                './dist/css/style.scss.map',
                './dist/js/app.js',
                './dist/js/templates.js',
            ],
            dev: ['./dist/js', './dist/css'],
            prod: ['./dist'],
        },

        copy: {

            index: {
                files: [
                    {
                        expand: true,
                        cwd: './src',
                        src: ['index.html'],
                        dest: './dist/'
                    }
                ],
            },

            images: {
                files: [
                    {
                        expand: true,
                        cwd: './src/images',
                        src: ['**'],
                        dest: './dist/images'
                    }
                ],
            },

            i18: {
                files: [
                    {
                        expand: true,
                        cwd: './src/i18',
                        src: ['**'],
                        dest: './dist/i18'
                    }
                ],
            },

            libs: {
                files: [
                    {
                        expand: true,
                        cwd: './bower_components',
                        src: ['**'],
                        dest: './dist/libs'
                    }
                ],
            }

        },

        concat: {

            options: {
                separator: '',
            },

            js: {
                options: {
                    separator: 'SPIKE_IMPORT_END \n'
                },
                src: application.structure,
                dest: application.outputApplication
            },

            sass: {
                src: application.sass,
                dest: application.outputSass
            },

        },

        sass: {
            dist: {
                files: application.sassStyles
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: application.cssStyles
            }
        },

        uglify: {
            options: {
                mangle: true
            },
            app: {
                files: application.uglifyApplication
            },
            templates: {
                files: application.uglifyTemplates
            }
        },

        watch: {

            index: {
                files: './src/index.html',
                tasks: ['copy:index', 'preprocess:dev'],
                options: {
                    nospawn: true
                }
            },

            html: {
                files: application.html,
                tasks: ['shell:compileTemplates', 'uglify:templates'],
                options: {
                    nospawn: true
                }
            },

            css: {
                files: application.sass,
                tasks: ['concat:sass', 'sass', 'cssmin', 'cachebreaker:dev'],
                options: {
                    nospawn: true
                }
            },

            js: {
                files: application.structure,
                tasks: ['concat:js',  'shell:compileImportsAndGStrings', 'uglify:app', 'cachebreaker:dev'],
                options: {
                    nospawn: true
                }
            }

        },

        cachebreaker: {

            dev: {
                options: {
                    match: [
                        'app.min.js',
                        'style.min.css',
                        'templates.min.js',
                        'app.js',
                        'style.css',
                        'templates.js'
                    ],
                },
                files: {
                    src: ['./dist/index.html']
                }
            },

            prod: {
                options: {
                    match: [
                        'app.min.js',
                        'style.min.css',
                        'templates.min.js'
                    ],
                },
                files: {
                    src: ['./dist/index.html']
                }
            }

        },

        preprocess: {

            dev: {
                src: ['./dist/index.html'],
                options: {
                    inline: true,
                    context: {
                        ENV: 'DEV'
                    }
                }
            },
            prod: {
                src: ['./dist/index.html'],
                options: {
                    inline: true,
                    context: {
                        ENV: 'PROD'
                    }
                }
            }

        },

        connect: {
            server: {
                port: 2111,
                base: './dist'
            }
        },

        shell: {
            compileImportsAndGStrings: {
                command: 'java -jar bower_components/spike-compiler/build/libs/spike-compiler.jar imports-gstrings  dist/js/app.js dist/js/app.js'
            },
            compileTemplates: {
                command: 'java -jar bower_components/spike-compiler/build/libs/spike-compiler.jar templates  src/app dist/js/templates.js'
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            live: {
                tasks: ["watch:html", "watch:css", "watch:js", "watch:index", "connect:server"]
            }
        }

    });

    grunt.registerTask('pre-build', ['clean:prod', 'copy:index', 'copy:images', 'copy:i18', 'copy:libs', 'cachebreaker:prod']);

    grunt.registerTask('build', [
        'pre-build',
        'clean:dev',
        'concat:js',
        'shell:compileImportsAndGStrings',
        'shell:compileTemplates',
        'uglify:app',
        'uglify:templates',
        'concat:sass',
        'sass',
        'cssmin'
    ]);

    grunt.registerTask('prod', [
        'build',
        'preprocess:prod',
        'clean:postBuild'
    ]);


    grunt.registerTask('dev', [
        'build',
        'preprocess:dev',
        'concurrent:live'
    ]);


};