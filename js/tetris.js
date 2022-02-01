// 'use strict';

// const brick = [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 4, y: 4 }];
const block = document.querySelectorAll('.block');
const innertState = Array(20).fill().map(() => Array(10).fill(null))

for (let i = 0; i < 6; i++) innertState[19][i] = 'orange'
for (let i = 6; i < 9; i++) innertState[19][i] = 'green'
for (let i = 1; i < 5; i++) innertState[18][i] = 'yellow'
for (let i = 1; i < 5; i++) innertState[17][i] = 'yellow'

console.log(innertState)


// const arr = []
// for (let i=0; i<20; i++) {
//   const subArr = [];
//   for (let j = 0; j < 10; j++) {
//     subArr.push(null)
//   }
//   arr.push(subArr)
// }

fetch('bricks.txt').then(response => response.text()).then(bricks => {
  bricks = bricks.split('\r\n\r\n')

  for (let i = 0; i < bricks.length; i++) {
    let brick = bricks[i].split('\r\n')
    const color = brick.pop()
    const coords = []
    brick = brick.map(row => row.match(/../g))

    for (let y = 0; y < brick.length; y++) {
      for (let x = 0; x < brick[y].length; x++) {
        if (brick[y][x] !== '  ') coords.push({ x, y })
      }
    }

    bricks[i] = { coords, color }

  }

  const brick = bricks[rnd(bricks.length)]
  brick.coords.forEach(coords => blocks[coords.y * 10 + coords.x].style.background = brick.color)


})

function rnd(max) {
  return Math.floor(Math.random() * max)
}