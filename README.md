Geoffrey
========

[![Code Climate](https://codeclimate.com/github/era/Geoffrey/badges/gpa.svg)](https://codeclimate.com/github/era/Geoffrey)

Geoffrey is a simple express app to serve static pages, just put your html pages on views folder and everything else on public and you are ready to go.

To run, just type on command line:
		
		npm install geoffrey


In your code:

		Geoffrey = require('./geoffrey');
   		Geoffrey.serves('html_folder') // html folder
        .with('public_folder') //public folder with assets
        .render_with('html') //or hbs for example, if you want another template engine you should install as your dependency and replace here.
        .index_as('index.hbs')
        .on(1337)

		
		
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

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.


If you like, why not pay me a coffee? :)
<a href='http://ko-fi.com?i=18652RF02P1Z4' target='_blank'><img style='border:0px' src='https://az743702.vo.msecnd.net/cdn/btn3.png' border='0' alt='Buy Me A Coffee at Ko-Fi.com' /></a> 
