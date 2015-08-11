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
