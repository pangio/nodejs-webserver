'use strict';

var host = 'http://localhost:8000/people';
var request = require('request');

/**
 *  Request for all the people from the pub/sub server.
 *  Used for new connections.
 */
exports.get = function(callback) {
  request(host, function(err, resp, data){
    data = JSON.parse(data);
    if (data.error) return callback(err, []);
    callback(null, data.data);
  });
};
