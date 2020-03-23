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
        },
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              src: './index.html',
              dest: 'dist/index.html'
            }
          },
          cssmin: {
            'dist/rectangle.css': 'rectangle.css'
          },
          uglify: {
            release:{
              files: {
                'dist/rectangle.js': 'rectangle.js',
                'dist/calc.js': 'calc.js'
              }
            }
          }
    });
    // 加载插件，多个插件写多行
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 定义构建任务清单
    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('unitTest', ['mocha']);
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
};