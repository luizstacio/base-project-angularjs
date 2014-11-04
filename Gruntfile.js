module.exports = function( grunt ) {
	grunt.initConfig({
		copy: {
			public: {
				expand: true,
				cwd: 'public',
				src: [ '**' ],
				dest: 'build'
			}
		},

		clean: {
			dist: {
				src: [ 'build' ]
			}
		},

		useminPrepare: {
			html: 'build/**/*.html'
		},

		usemin: {
			html: 'build/**/*.html'
		},

		imagemin: {
		   public: {
		     expand: true,
		     cwd: 'build/images',
		     src: '**/*.{png,jpg,gif}',
		     dest: 'build/images'
		   }
		},

		rev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 10
			},

			imagens: {
				src: ['build/images/**/*.{png,jpg,gif}']
			},

			minificados: {
				src: ['build/modules/**/*.min.js', 'build/styles/**/*.min.css']
			}
		},

		less: {
			compilar: {
				expand: true,
				cwd: 'public/less',
				src: ['**/*.less'],
				dest: 'public/styles',
				ext: '.css'
			}
		},

		watch: {
			options: {
				event: ['added', 'changed']
			},
			less: {
				files: 'public/less/**/*.less', 
				tasks: 'less:compilar'
			},
			js: {
		      files: 'public/modules/**/*.js',
		      tasks: 'jshint:js'
		   }
		},

		jshint: {
			js: {
				src: ['public/modules/**/*.js']
			}
		},

		browserSync: {
			public: {
				bsFiles: {
					src : ['public/**/*']
				},
				options: {
					watchTask: true,
					server: {
						baseDir: 'public'
					}
				}
			}
		}

	});

	grunt.registerTask('server', ['browserSync', 'watch']);
	grunt.registerTask('dist', [ 'clean', 'copy' ]);
	grunt.registerTask('minifica', [ 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev:imagens', 'rev:minificados', 'usemin', 'imagemin' ]);

	grunt.registerTask('build', [ 'dist', 'minifica' ]);

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-rev');
	grunt.loadNpmTasks('grunt-browser-sync');
}
