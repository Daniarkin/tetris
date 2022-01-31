// 'use strict';

// const brick = [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 4, y: 4 }];
const block = document.querySelectorAll('.block');

fetch('bricks.txt').then(response => response.text()).then(bricks => {
  bricks = bricks.split('\r\n\r\n')

  for (let i = 0; i < bricks.length; i++) {
    let brick = bricks[i].split('\r\n')
    brick = brick.map(row => row.match(/../g))
    const coords = []

    for (let y = 0; y < brick.length; y++) {
      for (let x = 0; x < brick[y].length; x++) {
        if (brick[y][x] !== '  ') coords.push({ x, y })
      }
    }

    console.log(coords)

    bricks[i] = coords

  }
  console.log(bricks)

  bricks[rnd(bricks.length)].forEach(coords => block[coords.y * 10 + coords.x].style.background = 'green')
})

function rnd(max) {
  return Math.floor(Math.random() * max)
}