class Monster extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, name = 'Twiggy') {
        super(scene, x, y, 'monster');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.name = name;
        this.setTint(0x44ff88); // Green monster color
    }

    update() {
        // Simple follow behavior later
    }
}