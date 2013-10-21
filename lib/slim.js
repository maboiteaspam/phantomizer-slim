'use strict';

// External libs.
var path = require('path');

(function(exports) {
    exports.www_vendors_path = path.resolve(__dirname+"/../vendors/")+"/";

}(typeof exports === 'object' && exports || this));