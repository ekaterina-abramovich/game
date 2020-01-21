//1st scene
class ekaterinaStart extends Scene {

    preload() {

        this.menu = new EkaterinaMap();
        this.menu.preload('data/ekaterina/menu.json');

        var begin = loadImage('images/ekaterina/begin.gif');
        this.begin = new NPCimage(0, 620, begin);
        
        this.press = loadSound('sounds/ekaterina/press.mp3');
        this.press.setVolume(1.0);
    }


    setup() {

        createCanvas(1435, 735);
        
        this.menu.setup();
        this.begin.setup();
    }

     start() {

         this.menu.start();
      }

    draw() {
    
        this.menu.display();
        this.begin.display();
 
        if (keyIsDown(ENTER)) {
                changeScene('ekaterinaInstructions');
                remix.loop();
                this.press.play();
        }
    }
    
    end() {
        
		this.menu.end();
	}

}
