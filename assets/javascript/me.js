if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "$ wingman", "$ wingma", "$ wingm", "$ wing", "$ win", "$ wi", "$ w", "$ wi", "$ win", "$ wing", "$ wingm", "$ wingma", "$ wingma", "$ wingman"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
