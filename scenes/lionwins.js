//lionwins scene
class lionwins extends Scene {

    preload() {
        
        this.nextSound = loadSound('sounds/ekaterina/next.mp3');
        this.nextSound.setVolume(1.0);

        this.lionwins = new EkaterinaMap();
        this.lionwins.preload('data/ekaterina/lionwins.json');
        
        var next = loadImage('images/ekaterina/next.gif');
        this.next = new NPCimage(0, 680, next);
        
        var confetti = loadImage('images/ekaterina/confetti.gif');
        this.confetti = new NPCimage(0, 305, confetti);
        
        var lion = loadSpriteSheet('images/ekaterina/lion.png', 520, 467, 22);
        this.lion = new NPC(-140, 400, lion);
    }

    setup() {

        createCanvas(1435, 735);
        
        this.lionwins.setup();
        this.confetti.setup();
        this.lion.setup();
        this.next.setup();
    }

     start() {
         
         this.lionwins.start();
      }

    draw() {
    
        this.lionwins.display();
        this.lion.display();
        this.confetti.display();
        this.next.display();

            if (keyIsDown(32)) {
                location.reload(); 
                changeScene('ekaterinaStart');
        } 
        
    }
    
    end() {
        
		this.lionwins.end();
	}

}
