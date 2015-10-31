Geoffrey
========

[![Code Climate](https://codeclimate.com/github/era/Geoffrey/badges/gpa.svg)](https://codeclimate.com/github/era/Geoffrey)

Geoffrey is a simple express app to serve static pages, just put your html pages on views folder and everything else on public and you are ready to go.

To run, just type on command line:
		
		npm install geoffrey


In your code:

		Geoffrey = require('geoffrey');
   		Geoffrey.serves('html_folder') // html folder
        .with('public_folder') //public folder with assets
        .render_with('html') //or hbs for example, if you want another template engine you should install as your dependency and replace here.
        .index_as('index.hbs')
        .on(1337)

Command line example
----
     geoffrey --folder html_folder/ -r html

You also can see the args list with: ```geoffrey --help```
		
FAQ
------

* Hey, thanks for the script, but why Geoffrey?
	* Because of Geoffrey the English butler on the NBC sitcom The Fresh Prince of Bel-Air. 	
* Can I deploy this on heroku to serve static pages?
	* Yes you can :)

Contributing
------------

  1. Fork it
  2. Create your feature branch (`git checkout -b my-new-feature`)
  3. Commit your changes (`git commit -am 'Add some feature'`)
  4. Push to the branch (`git push origin my-new-feature`)
  5. Create new Pull Request


License
---------

The MIT License (MIT)

Copyright (c) 2015 Elias Granja Jr.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.