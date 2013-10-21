'use strict';

module.exports = function(grunt) {


    var fs = require("fs");
    var path = require("path");
    var slim = require("../lib/slim.js");

    grunt.registerMultiTask("phantomizer-export-slim", "", function () {
        var done = this.async();

        var options = this.options();

        var export_dir = options.export_dir;

        grunt.log.ok("exporting to "+export_dir );
        grunt.file.mkdir( export_dir );

        var source = slim.documentroot_path;
        var files = grunt.file.expand({}, [source+"**"]);
        for( var n in files ){
            var f = files[n].substring(source.length)
            if( f != "" ){
                if( grunt.file.isDir(files[n]) ){
                    grunt.file.mkdir( export_dir+"/"+f )
                }else{
                    var output_f = path.normalize(export_dir+"/"+f)
                    grunt.file.copy(source+"/"+f, output_f)
                    grunt.verbose.ok("copying "+source+"/"+f+" "+output_f);
                }
            }
        }
        done();
    });

};