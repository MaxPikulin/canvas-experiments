const canvas = document.getElementsByTagName('canvas')[0];
const c = canvas.getContext('2d');
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 7;

function rnd(max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min + 1));
}

const rndColour = (opacity = 1) => `rgba(${rnd(255)},${rnd(255)},${rnd(255)},${opacity})`;

function randRect() {
  c.fillStyle = rndColour(0.1);
  c.fillRect(rnd(window.innerWidth) - 50, rnd(window.innerHeight) - 50, rnd(250), rnd(250));
}

function fillGridRnd(grid) {
  let side = 10;
  let gap = 1;
  let cols = window.innerWidth / (side + gap) + 1;//1500;
  let rows = window.innerHeight / (side + gap) + 1;// 900;
  // console.log(cols, rows);
  let opacity = 0.5;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      c.fillStyle = rndColour(opacity);
      c.fillRect(x * (side + gap), y * (side + gap), side, side);
    }
  }
}

function fillCell(grid) {
  let side = 10;
  let gap = 1;
  let cols = window.innerWidth / (side + gap) + 1;//1500;
  let rows = window.innerHeight / (side + gap) + 1;// 900;
  // console.log(cols, rows);
  let opacity = 0.5;
  c.fillStyle = rndColour(opacity);
  c.fillRect(rnd(cols) * (side + gap), rnd(rows) * (side + gap), side, side);
}

function fullCircle() {
  let x = 300;
  let y = 300;
  let rad = 50;
  let start = 0;
  let stop = Math.PI * 2;

  // for (let i = 0; i <= Math.PI * 2 + 10; i++) {
    c.beginPath();
    c.arc(x, y, rad, start, stop, false);
    c.stroke();
  // }
}

function perf(func, times = 10000) {
  let stop;
  let start = Date.now();
  for (let i = 0; i < times; i++) {
    func();
  }
  stop = Date.now();
  console.log('Perf for '+times+' iterations : '+(stop - start) / times+'ms/iteration.');
  console.log('Total: ', stop - start);
}

// canvas.addEventListener('click', fill);
