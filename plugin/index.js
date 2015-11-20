/**
 * Created by Nicolas on 11/19/15.
 */
(function (Plugin) {
    'use strict';

    var filters = require('./filters');

    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        filters: filters
    };

})(module.exports);