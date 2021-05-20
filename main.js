const canvas = document.getElementById("game");
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

const randomTable = (rows, cols) =>
  Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.floor(Math.random() * 2))
  );

const grid = randomTable(15, 15);

const loop = () => {
  requestAnimationFrame(loop);
  draw();
  update();
};

const scale = 50;

const draw = () => {
  ctx.fillStyle = "#808080";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  grid.forEach((row, r) => {
    row.forEach((col, c) => {
      if (col) {
        ctx.fillStyle = "cyan";

        ctx.fillRect(scale * r, scale * c, scale - 2, scale - 2);
      }
    });
  });
};

const update = () => {
  for (let i = 1; i < grid.length - 3; i += 3) {
    for (let j = 1; j < grid[i].length - 3; j += 3) {
      console.log(grid[i][j]);
    }
  }
};

loop();
