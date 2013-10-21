'use strict';

// External libs.
var path = require('path');

(function(exports) {
    exports.documentroot_path = path.resolve(__dirname+"/../documentroot_dir/")+"/";

}(typeof exports === 'object' && exports || this));