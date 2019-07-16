# IntroToNodejs

Make a new directory.
Then change the current directory to new directory.
Start a project by npm init command.
Name the Entry Point as app.js.
Then install express if required or package required for building the project such as Express,MongoDB etc.
Then start writing your app in text editor.

//example of starting your app
var express =require("express");
var app = express();
//for the purpose of starting the server 
app.listen(3000,function(){
	console.log("server started!!!");
});
