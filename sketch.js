/* 
	final project	
	mmp 310 
	fall 2019
*/

var remix;
var scene = 'ekaterinaStart';

var sceneManager = {};
sceneManager['ekaterinaStart'] = new ekaterinaStart();
sceneManager['ekaterinaInstructions'] = new ekaterinaInstructions();
sceneManager['ekaterina'] = new ekaterina();
sceneManager['mousewins'] = new mousewins();
sceneManager['lionwins'] = new lionwins();

function preload() {
	for (var s in sceneManager) {
		sceneManager[s].preload();	
	}
    
    remix = loadSound('sounds/ekaterina/remix.mp3');
    remix.setVolume(0.3);
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (var s in sceneManager) {
		sceneManager[s].setup();	
	}
	
    //SCROLL BAR
	/*var sceneSelector = createSelect();
	var scenes = Object.keys(sceneManager);
	for (var i = 0; i < scenes.length; i++) 
    {
		sceneSelector.option(scenes[i]);
	} */
	
	sceneManager[scene].start();
}

function changeScene(_scene) {
	sceneManager[scene].end();
	scene = _scene;
	sceneManager[scene].start();
}


function draw() {
	sceneManager[scene].draw(paralaxScroll);
}

var paralaxScroll = 0;
function mouseWheel(event) {
	paralaxScroll = event.delta;
}





