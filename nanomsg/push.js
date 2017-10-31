let nano = require('nanomsg');

let pub = nano.socket('push');

let addr = 'tcp://127.0.0.1:7789'
pub.bind(addr);

setTimeout(function () {
 pub.send("Hello from nanomsg!");
}, 1000);