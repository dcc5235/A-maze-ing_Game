const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3; // cells in the horizontal/vertical edge
const width = 600; // pixel values
const height = 600; // pixel values

const unitLength = width / cells;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true,
    width, 
    height 
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  // Top barrier: 400 units over, 0 units down, 800 units wide, 40 units tall
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  // Bottom barrier
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  // Left barrier
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  // Right barrier
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];

World.add(world, walls);

// Maze generation
const shuffle = (arr) => {
  let counter = arr.length;

  while(counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter--;

    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
.fill(null)
.map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

// Algorithm for maze generation
const stepThroughCell = (row, column) => { 
  // If visited cell at [row, col], then return early
  if (grid[row][column] === true) {
    return;
  }
  // Mark this cell as being visited
  grid[row][column] = true;
  // Assemble randomly-ordered list of neighbords
  const neighbors = shuffle([
    [row - 1, column, 'up'], // up
    [row, column + 1, 'right'], // right
    [row + 1, column, 'down'], // down
    [row, column - 1, 'left'] // left
  ]);
  console.log(neighbors);
  // For each neighbor, do the following
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;
  // See if neighbor is out of bounds
    if (nextRow < 0 || nextRow >= cells || nextColumn < 0 || nextColumn >= cells) {
      continue;
    }
  // If we have visited neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }
  // Remove a wall from either horiz/vert array
    if (direction === 'left') {
      verticals[row][column - 1] = true;
    } else if (direction === 'right') {
      verticals[row][column] = true;
    } else if (direction === 'up') {
      horizontals[row - 1][column] = true;
    } else if (direction === 'down') {
      horizontals[row][column] = true;
    }

    stepThroughCell(nextRow, nextColumn);
}
  // Visit next cell

};

stepThroughCell(startRow, startColumn);

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open === true) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength / 2,
      rowIndex * unitLength + unitLength,
      unitLength,
      10,
      {
        isStatic: true
      }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength,
      rowIndex * unitLength + unitLength / 2,
      10,
      unitLength,
      {
        isStatic: true
      }
    );
    World.add(world, wall);
  });
});