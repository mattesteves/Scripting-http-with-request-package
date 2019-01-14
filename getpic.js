var request= require('request');

var fs =require('fs');
console.log("Downloading image...")
request.get('https://sytantris.github.io/http-examples/future.jpg')
	.on('error', function (err){
		console.log('a fatal whoopsie-daisy has occured.')
	})
	.on('response', function(response){
		console.log('Response Status Code: ', response.statusCode)
	})
	.pipe(fs.createWriteStream('./future.jpg'))
	.on('finish', function(){
		console.log("Image downloaded")
	})
	;
