#! /usr/bin/env node

var program = require('commander');
var geoffrey = require('./geoffrey');

program
  .version('1.1.0')
  .option('-p --port [type]', 'Add the specified port [8080]', '8080')
  .option('-f, --folder <path>', 'Add a specific static folder [./html]', './html')
  .option('-a, --assets <path>', 'Add a specific assets folder [""]', undefined)
  .option('-r, --render [type]', 'Add a specific markup language [html]', 'html')
  .option('-i, --index_file [type]', 'Add a specific index file [index.html]', 'index.html')
  .parse(process.argv);

geoffrey.serves(program.folder || './html')
		.index_as(program.index_file || 'index.html');

if(program.render) geoffrey.render_with(program.render);
if(program.assets) geoffrey.with(program.assets);

geoffrey.on(program.port || 8080) //run
