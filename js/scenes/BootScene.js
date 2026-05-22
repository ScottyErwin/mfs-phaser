class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        console.log("BootScene: Preloading assets...");
        // We'll load images here later
    }

    create() {
        this.scene.start('FarmScene');
    }
}