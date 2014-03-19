Geoffrey
========


Geoffrey is a simple express app to serve static pages, just put your html pages on views folder and everything else on public and you are ready to go.

To run, just type on command line:
		
		npm install Geofrey


In your code:

		Geofrey = require('geofrey');
		Geofrey.serves('html_folder') // html folder
			.with('public_folder') //public folder with assets
			.on(1337) //port number that we should listen

		
		
FAQ
=====

* Hey, thanks for the script, but why Geoffrey?
	* Because of Geoffrey the English butler on the NBC sitcom The Fresh Prince of Bel-Air. 	
* Can I deploy this on heroku to serve static pages?
	* Yes you can :)