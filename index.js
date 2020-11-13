const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const width = 800; // pixel values
const height = 600; // pixel values

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false, // makes the shapes solid
    width, 
    height 
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world, MouseConstraint.create(engine, {
  mouse: Mouse.create(render.canvas)
}));

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

// Random shapes

for (let i = 0; i < 35; i++) {
  if (Math.random() > 0.5) {
    World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
  } else {
    World.add(
      world, Bodies.circle(Math.random() * width, Math.random() * height, 35)
    );
  }
}