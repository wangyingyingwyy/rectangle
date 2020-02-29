module.exports=function (grunt) { 
    grunt.initConfig({
        //htmlhint
        htmlhint:{
            options:{
                htmlhintrc:'.htmlhintrc'
            },
            src:'*.html'
        },
        // csslint
        csslint:{
            options:{
                csslintrc:'.csslintrc'
            },
            src:'*.css'
        },
        // eslint
        eslint:{
            options:{
                configFile:'.eslintrc.json'
            },
            target:['*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint']);
};