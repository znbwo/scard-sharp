let nano = require('nanomsg');

let sub = nano.socket('sub');

let addr = 'tcp://127.0.0.1:7789'
sub.connect(addr);

sub.on('data', function (buf) {
 console.log(String(buf));
});
