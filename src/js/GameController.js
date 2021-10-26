/* eslint-disable import/no-cycle */
/* eslint-disable arrow-body-style */
import themes from './themes';
import { generateTeam } from './generators';

import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';

import { getPositionedCharacter } from './utils';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;

    this.teamPlayer = [Bowman, Daemon, Magician];
    this.teamСomputer = [Swordsman, Undead, Vampire];

    this.storagePositions = new Set();

    this.positionTeams = getPositionedCharacter([
      ...generateTeam(this.teamPlayer, 1, 2),
      ...generateTeam(this.teamСomputer, 1, 2),
    ], this.storagePositions);
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.redrawPositions(this.positionTeams);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
