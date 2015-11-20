(function (Filters) {
    'use strict';

    var nodebb = require('./nodebb');

    var meta = nodebb.meta;

    Filters.getConfig = function (config, callback) {
        // Use always traditional pagination
        config.usePagination = true;

        // Prevent override by user's settings
        config.topicsPerPage = meta.config.topicsPerPage || 20;
        config.postsPerPage = meta.config.postsPerPage || 20;

        callback(null, config);
    };

})(module.exports);