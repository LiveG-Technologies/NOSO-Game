var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    scene: {
        preload: preload,
        create: create
    }
}

var game = new Phaser.Game(config);

function preload() {
    this.load.setBaseURL("https://liveg-technologies.github.io/NOSO-Game");
    this.load.image("background", "assets/other/Background.png");
}

function create() {
    this.add.image(512, 384, "background");
}