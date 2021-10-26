/* eslint-disable no-shadow */
/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
import PositionedCharacter from './PositionedCharacter';

export function calcTileType(index, boardSize) {
  let square = '';

  if (index < boardSize) { square = 'top'; }
  if (index > boardSize ** 2 - boardSize - 1) { square = 'bottom'; }

  if (index === boardSize - boardSize
    || index === boardSize - 1
    || index === boardSize ** 2 - boardSize
    || index === boardSize ** 2 - 1) {
    square += '-';
  }

  if (index % boardSize === boardSize - 1) { square += 'right'; }
  if (index % boardSize === 0) { square += 'left'; }

  if (!square) { return 'center'; }

  return square;
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

function getRandomPosition(storagePos, initPos) {
  const boardSize = 8 ** 2;
  const randomInt = Math.floor(Math.random() * boardSize);

  if (((randomInt - initPos) % 8 === 0
      || (randomInt - initPos - 1) % 8 === 0)
      && !(storagePos.has(randomInt))) {
    storagePos.add(randomInt);
    return randomInt;
  }

  return getRandomPosition(storagePos, initPos);
}

export function getPositionedCharacter(team, storagePos) {
  return team.map((char) => {
    let initPosition = 0;

    if (char.type === 'swordsman' || char.type === 'undead' || char.type === 'vampire') {
      initPosition = 6;
    }

    return new PositionedCharacter(char, getRandomPosition(storagePos, initPosition));
  });
}
