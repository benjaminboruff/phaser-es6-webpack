import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/boot'
import LoadState from './states/load'
import PlayState from './states/play'

class Game extends Phaser.Game {

  constructor () {
    let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth
    let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight

    super(width, height, Phaser.AUTO, 'root', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Load', LoadState, false)
    this.state.add('Play', PlayState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
