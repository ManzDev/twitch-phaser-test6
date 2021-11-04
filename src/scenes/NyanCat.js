import Phaser from "phaser";

const CAT_SPRITE_SIZE = {
  frameWidth: 97,
  frameHeight: 59
};

const MUSIC_OPTIONS = {
  loop: true,
  volume: 1,
  rate: 1,
  detune: false,
};

export class NyanCat extends Phaser.Scene {
  preload() {
    this.load.audio("music", "assets/sounds/nyan-music.mp3");
    this.load.image("bg", "assets/sprites/bg.png");
    this.load.image("rainbow", "assets/sprites/rainbow.png");
    this.load.spritesheet("cat", "assets/sprites/cat.png", CAT_SPRITE_SIZE);
  }

  create() {
    const { width, height } = this.sys.game.scale.gameSize;

    this.music = this.sound.add("music");
    this.music.play(MUSIC_OPTIONS);

    this.add.image(width / 2, height / 2, "bg");

    const red = 0xff0000;
    const black = 0x000000;
    const green = 0x00ff00;
    const gold = 0xffd700;

    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("cat", { start: 0, end: 5, first: 0 }),
      frameRate: 15,
      repeat: -1
    });

    this.cat = this.add.sprite(150, 300, "cat")
      .play("walk")
      .setOrigin(0.5, 0.5)
      .setDepth(1)
      .setTint(red, black, green, gold)
      .setInteractive();

    this.input.setDraggable(this.cat);

    this.input.on("drag", (pointer, cat, dragX, dragY) => {
      const halfCatSize = cat.width / 2;
      cat.setX(Math.min(Math.max(halfCatSize, dragX), width - halfCatSize));
      const newPosition = (this.cat.x * this.music.totalDuration) / width;
      this.music.setSeek(newPosition);
    });

    this.rainbow = this.add.image(width / 2, height / 2, "rainbow");
  }

  update() {
    const { width, height } = this.sys.game.scale.gameSize;

    const mask = this.make.graphics().fillRect(0, 0, this.cat.x, height);
    const rainbowMask = new Phaser.Display.Masks.GeometryMask(this, mask);
    this.rainbow.setMask(rainbowMask);

    /*
    const panningValue = (this.cat.x * 2 / width) - 1;
    this.music.setPan(panningValue);
    */

    /*
    const detuneValue = (this.cat.x * 2400 / width) - 1200;
    this.music.setDetune(detuneValue);
    */

    /*
    const rateValue = (this.cat.x * 2 / width);
    this.music.setRate(rateValue);
    */
  }
}
