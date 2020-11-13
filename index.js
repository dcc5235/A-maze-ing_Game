const { Engine, Render, Runner, World, Bodies } = Matter;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800, //pixel values
    height: 600 //pixel values
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  // Top barrier: 400 units over, 0 units down, 800 units wide, 40 units tall
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
  // Bottom barrier
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  // Left barrier
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  // Right barrier
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true })
];

World.add(world, walls);

World.add(world, Bodies.rectangle(200, 200, 50, 50));