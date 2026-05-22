const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#5c9e31',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [BootScene, FarmScene]
};