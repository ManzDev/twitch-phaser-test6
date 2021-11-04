import Phaser from "phaser";
import { NyanCat } from "./scenes/NyanCat.js";

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#000",
  width: 800,
  height: 600,
  pixelArt: true,
  scene: [
    NyanCat
  ],
  audio: {
    disableWebAudio: false
  }
};

// eslint-disable-next-line
const game = new Phaser.Game(config);
