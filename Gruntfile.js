module.exports=function (grunt) { 
    //构建的具体配置信息
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
        },
        mocha: {
            test: {
                src: ['test/index.html'],
            },
            options: {
                run: true,
                reporter: 'Dot'
            }
        }
    });
    // 加载插件，多个插件写多行
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha');
    // 定义构建任务清单
    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('unitTest', ['mocha']);
};