class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'player');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.speed = 200;
        this.setTint(0x44aaff); // Blue kid color
    }

    update() {
        const cursors = this.scene.input.keyboard.createCursorKeys();
        const wasd = this.scene.input.keyboard.addKeys('W,A,S,D');

        let vx = 0;
        let vy = 0;

        if (cursors.left.isDown || wasd.A.isDown) vx = -1;
        if (cursors.right.isDown || wasd.D.isDown) vx = 1;
        if (cursors.up.isDown || wasd.W.isDown) vy = -1;
        if (cursors.down.isDown || wasd.S.isDown) vy = 1;

        this.body.setVelocity(vx * this.speed, vy * this.speed);
    }
}