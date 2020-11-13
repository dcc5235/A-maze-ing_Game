const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3; // cells in the horizontal/vertical edge
const width = 600; // pixel values
const height = 600; // pixel values

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

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
.fill(null)
.map(() => Array(cells).fill(false));

console.log(verticals, horizontals);