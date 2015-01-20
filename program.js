//console.log('beep boop')

var fs = require('fs');
//fs.createReadStream(process.argv[2]).pipe(process.stdout);

//process.stdin.pipe(process.stdout);

var through = require('through');
var split = require('split');

// var tr = through(write, end);
// //tr.write()
// //tr.end()

// function write(buf){
//   this.queue(buf.toString().toUpperCase());
// }

// function end(){
//   this.queue(null);
// }
var lineCount = 0;
var tr = through(write, end);

function write(buf) {
  this.queue(
    var line = buf.toString();
    if (lineCount % 2 === 0) {
      line.toLowerCase() + '\n';
    } else {
      line.toUpperCase() + '\n';
    });
  lineCount++;
}

function end() {
  this.queue(null);
}

//process.stdin.pipe(tr).pipe(process.stdout);

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout)
  //  .pipe(process.stdout)
;