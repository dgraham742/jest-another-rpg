const player = require('../lib/player.js');
const potion = require('../lib/potion');

jest.mock('../lib/potion');

console.log(new potion());
test('creates a player object', () => {
    const Player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
  });