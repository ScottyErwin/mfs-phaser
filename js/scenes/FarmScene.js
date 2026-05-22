class FarmScene extends Phaser.Scene {
    constructor() {
        super('FarmScene');
    }

    create() {
        // Simple green farm background
        this.add.rectangle(640, 360, 1280, 720, 0x5c9e31);

        // Title
        this.add.text(640, 50, 'Monster Farm Smash', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Player (Kid)
        this.player = new Player(this, 400, 300);
        
        // Twiggy
        this.twiggy = new Monster(this, 450, 320, 'Twiggy');

        console.log("FarmScene loaded - Use Arrow Keys or WASD to move");
    }

    update() {
        this.player.update();
        this.twiggy.update();
    }
}