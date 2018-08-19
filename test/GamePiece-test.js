const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')

describe('GamePiece', () => {
  let gamepiece; 

  beforeEach(() => {
    gamepiece = new GamePiece(100, 100, 10, 10, 'green')
  })


  // FINISHED
  it('should take properties', () => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green')
    
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    })
  });

  it.skip('should collide with walls', () => {})
  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})
})

// Setup
// Execution
// Assertion