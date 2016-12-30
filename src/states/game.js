import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './boot';
import LoadState from './load';
import PlayState from './play';
import GameOver from './gameover';

class Game extends Phaser.Game {

  constructor () {
    let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight;

    super(width, height, Phaser.AUTO, 'root', null)

    this.state.add('Boot', BootState, false);
    this.state.add('Load', LoadState, false);
    this.state.add('Play', PlayState, false);
    this.state.add('GameOver', GameOver, false);

    this.state.start('Boot');
  }
}

export default Game;
