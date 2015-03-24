'use strict';

var axon = require('axon');
var subSocket = axon.socket('sub');

/**
 *  Subscribe the the newpeople channel
 */
subSocket.connect(8001);

/**
 *  On error event
 */
subSocket.on('error', function(err){
  throw err;
});

/**
 *  Publish the new person to the pub/sub socket
 */
module.exports = subSocket;