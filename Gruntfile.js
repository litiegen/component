module.exports = function (grunt) {
	grunt.initConfig({
		cssmin: {
			'dist/component.css': 'component.css'
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
		uglify: {
			release:{
				files: {
					'dist/component.js': 'component.js'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask('default', ['htmlmin']);
	grunt.registerTask('default', ['uglify:release']);
	grunt.registerTask('default', ['cssmin']); 
};