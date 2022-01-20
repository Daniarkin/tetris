'use strict';

const brick = [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 4, y: 4 }];
const block = document.querySelectorAll('.block');

brick.forEach(coords => block[coords.y * 10 + coords.x].style.background = 'green')