class FarmScene extends Phaser.Scene {
    constructor() {
        super('FarmScene');
    }

    create() {
        // ============================================
        // FARM BACKGROUND - Starting Area Scenery
        // ============================================

        // Main grass background
        this.add.rectangle(640, 360, 1280, 720, 0x5c9e31);

        // Simple dirt path (horizontal)
        this.add.rectangle(640, 400, 900, 60, 0x8B5A2B);

        // Simple dirt path (vertical)
        this.add.rectangle(400, 360, 60, 500, 0x8B5A2B);

        // Title text (temporary)
        this.add.text(640, 60, 'Monster Farm Smash', {
            fontSize: '36px',
            fill: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        // TODO: Add trees here later
        // TODO: Add player here later
        // TODO: Add Twiggy (monster) here later
        // TODO: Add rocks, house, campfire, etc. later

        console.log('%c[FarmScene] Background loaded successfully', 'color: #0f0');
    }
}