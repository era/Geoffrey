Geoffrey
========


Geoffrey is a simple express app to serve static pages, just put your html pages on views folder and everything else on public and you are ready to go.

To run, just type on command line:
		
		npm install geoffrey


In your code:

		Geoffrey = require('geoffrey');
		Geoffrey.serves('html_folder') // html folder
			.with('public_folder') //public folder with assets
			.index_as('index.html')
			.on(1337) //port number that we should listen

		
		
FAQ
=====

* Hey, thanks for the script, but why Geoffrey?
	* Because of Geoffrey the English butler on the NBC sitcom The Fresh Prince of Bel-Air. 	
* Can I deploy this on heroku to serve static pages?
	* Yes you can :)

If you like, why not pay me a coffee? :)
<a href='http://ko-fi.com?i=18652RF02P1Z4' target='_blank'><img style='border:0px' src='https://az743702.vo.msecnd.net/cdn/btn3.png' border='0' alt='Buy Me A Coffee at Ko-Fi.com' /></a> 
